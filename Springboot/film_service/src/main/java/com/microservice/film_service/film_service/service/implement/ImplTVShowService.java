package com.microservice.film_service.film_service.service.implement;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.repository.PagingAndSortingTVShowRepository;
import com.microservice.film_service.film_service.repository.TVShowRepository;
import com.microservice.film_service.film_service.service.TVShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

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
        return tvShowRepository.findById(id).orElse(null);
    }

    @Override
    public List<TVShow> getTVShows(int page, int size, List<Genre> genres, String name, List<String> countries,
                                   List<Integer> ratings, List<Integer> years) {
        Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "firstYearRelease");
        if(years == null){
            years = new ArrayList<>();
            for(int i = 1900; i <= LocalDateTime.now().getYear(); i++){
                years.add(i);
            }
        }
        if(genres == null){
            genres = new ArrayList<>();
            genres.addAll(Arrays.asList(Genre.values()));
        }
        if(countries == null){
            countries = Arrays.asList("Vietnam", "Korea", "Japan", "China", "America", "France", "Poland");
        }
        Page<TVShow> filmPage = pagingAndSortingTVShowRepository.findByGenresInAndNameRegexIgnoreCaseAndCountryOfOriginInAndFirstYearReleaseIn(
                paging, genres, ".*" + name + ".*",countries, years);
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

            tvShow.setBanner(image.get("url"));
            return tvShowRepository.insert(tvShow);
        }catch(Exception e){
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public TVShow editTVShow(MultipartFile banner, TVShow tvShow, boolean isChangeBanner) {
        Cloudinary cloudinary = new Cloudinary(cloudinary_url);
        cloudinary.config.secure = true;
        try{
            String filmId = tvShow.getId();
            String publicId = tvShow.getName()+ "_" + filmId;
            if(isChangeBanner){
                Map<String, String> image = cloudinary.uploader().upload(convertMultiPartToFile(banner), ObjectUtils.asMap(
                        "folder", "SOA/FINAL/images/", "public_id", publicId));

                tvShow.setBanner(image.get("url"));
            }
            return tvShowRepository.save(tvShow);
        }catch(Exception e){
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public TVShow updateRate(String tvShowID, double rate) {
        try {
            TVShow tvShow = getTVShow(tvShowID);
            if(tvShow != null){
                tvShow.setRate(rate);
                return tvShowRepository.save(tvShow);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public TVShow deleteTVShow(String tvShowID) {
        try{
            TVShow tvShow = tvShowRepository.findById(tvShowID).orElse(null);
            if(tvShow != null){
                tvShowRepository.delete(tvShow);
                return tvShow;
            }
        } catch(Exception e){
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
