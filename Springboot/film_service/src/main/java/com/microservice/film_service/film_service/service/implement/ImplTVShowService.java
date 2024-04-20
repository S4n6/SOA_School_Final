package com.microservice.film_service.film_service.service.implement;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.repository.PagingAndSortingTVShowRepository;
import com.microservice.film_service.film_service.repository.TVShowRepository;
import com.microservice.film_service.film_service.service.TVShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ImplTVShowService implements TVShowService {
    @Value("${CLOUDINARY_URL}")
    private String cloudinary_url;

    @Autowired
    private TVShowRepository tvShowRepository;
    
    @Autowired
    private PagingAndSortingTVShowRepository pagingAndSortingTVShowRepository;
    
    @Override
    public TVShow getTVShow(String id){
        return tvShowRepository.findByID(id).orElse(null);
    }

    @Override
    public List<TVShow> getTVShows(int page, int size, Genre genre, String name, Status status) {
        Pageable paging = PageRequest.of(page, size);
        if(!name.isEmpty() && genre != null && status != null){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByGenresContainingAndNameRegexIgnoreCaseAndStatus(paging, genre, ".*" + name + ".*", status);
            return filmPage.getContent();
        }
        else if(!name.isEmpty() &&  genre != null){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByGenresContainingAndNameRegexIgnoreCase(paging, genre, ".*" + name + ".*");
            return filmPage.getContent();
        }
        else if(!name.isEmpty() && status != null){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByNameRegexIgnoreCaseAndStatus(paging, ".*" + name + ".*", status);
            return filmPage.getContent();
        } else if (genre != null && status != null) {
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByGenresContainingAndStatus(paging, genre, status);
            return filmPage.getContent();
        }
        else if(!name.isEmpty()){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByNameRegexIgnoreCase(paging, name);
            return filmPage.getContent();
        }
        else if(genre != null){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByGenresContaining(paging, genre);
            return filmPage.getContent();
        }
        else if (status != null){
            Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByStatus(paging, status);
            return filmPage.getContent();
        }
        Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findAll(paging);
        return filmPage.getContent();
    }

    @Override
    public TVShow addTVShow(MultipartFile banner, TVShow tvShow) throws Exception {
        Cloudinary cloudinary = new Cloudinary(cloudinary_url);
        cloudinary.config.secure = true;
        try{
            String filmId = UUID.randomUUID().toString();
            String publicId = tvShow.getName()+ "_" + filmId;
            Map<String, String> image = cloudinary.uploader().upload(convertMultiPartToFile(banner), ObjectUtils.asMap(
                    "folder", "SOA/FINAL/images/", "public_id", publicId));
            tvShow.setID(filmId);
            tvShow.setBanner(image.get("url"));
            return tvShowRepository.insert(tvShow);
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
