package com.microservice.film_service.film_service.service;

import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.model.TVShow;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TVShowService {
    public TVShow getTVShow(String id);
    public List<TVShow> getTVShows(int page, int size, Genre genre, String name, Status status);
    public TVShow addTVShow(MultipartFile banner, TVShow tvShow) throws Exception;
}
