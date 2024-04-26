package com.microservice.film_service.film_service.service;

import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.Status;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MovieService {
    public Movie getFilm(String id);
    public List<Movie> getFilms(int page, int size, Genre genre, String name, Status status);
    public Movie addFilm(MultipartFile video, MultipartFile banner, Movie film) throws IOException;
    public Movie editFilm(MultipartFile video, MultipartFile banner, Movie film, boolean isChangeVideo, boolean isChangeBanner);
    public Movie deleteFilm(String id);
}
