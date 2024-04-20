package com.microservice.film_service.film_service.service.implement;

import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.utils.ObjectUtils;
import com.microservice.film_service.film_service.model.Episode;
import com.microservice.film_service.film_service.repository.EpisodeRepository;
import com.microservice.film_service.film_service.service.EpisodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ImplEpisodeService implements EpisodeService {
    @Value("${CLOUDINARY_URL}")
    private String cloudinary_url;

    @Autowired
    private EpisodeRepository episodeRepository;

    @Override
    public Episode getEpisode(String id) {
        return episodeRepository.findById(id).orElse(null);
    }

    @Override
    public List<Episode> getEpisodes(String seasonID) {
        return episodeRepository.findBySeasonID(seasonID);
    }

    @Override
    public Episode addEpisode(MultipartFile video, MultipartFile banner, Episode episode) throws IOException {
        Cloudinary cloudinary = new Cloudinary(cloudinary_url);
        cloudinary.config.secure = true;

        try {
            String episodeID = UUID.randomUUID().toString();
            String publicID = episode.getName() + "_" + episodeID;

            Map<String, String> image = cloudinary.uploader().upload(convertMultiPartToFile(banner), ObjectUtils.asMap(
                    "folder", "SOA/FINAL/images/", "public_id", publicID));

            Map<String, String> json = cloudinary.uploader().upload(convertMultiPartToFile(video),
                    ObjectUtils.asMap("resource_type", "video",
                            "folder", "SOA/FINAL/videos/",
                            "public_id", publicID,
                            "eager", Arrays.asList(
                                    new EagerTransformation().width(1000).height(1000).crop("pad").audioCodec("none"),
                                    new EagerTransformation().width(1600).height(1000).crop("crop").gravity("south").audioCodec("none")),
                            "eager_async", true,
                            "eager_notification_url", "http://localhost:8080/api/v1/film"));
            episode.setID(episodeID);
            episode.setBanner(image.get("url"));
            episode.setVideo(json.get("url"));
            return episodeRepository.insert(episode);

        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}
