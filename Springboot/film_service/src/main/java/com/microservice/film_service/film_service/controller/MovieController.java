package com.microservice.film_service.film_service.controller;

import com.microservice.film_service.film_service.ResponseMessage;
import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

//    Get films
    @GetMapping("/{id}")
    public ResponseEntity<Object> getFilm(@PathVariable String id){
        Movie film = movieService.getFilm(id);
        if(film != null){
            return ResponseMessage.createResponse(HttpStatus.OK, "GET FILM SUCCESSFULLY!", film);
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET FILM FAILED!", null);
    }

    @GetMapping("")
    public ResponseEntity<Object> getFilms(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false) Status status,
            @RequestParam(value = "genre", required = false) Genre genre,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size){
        try{
            List<Movie> films = movieService.getFilms(page, size, genre, name, status);
            return ResponseMessage.createResponse(HttpStatus.OK, "GET FILMS SUCCESSFULLY!", films);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET FILMS FAILED!", null);
    }

//    Add film + upload film to cloudinary
    @PostMapping("")
    public ResponseEntity<Object> addFilm(@RequestParam("banner") MultipartFile banner,
                                          @RequestParam("video") MultipartFile video,
                                          @RequestParam String name, @RequestParam int duration,@RequestParam int firstYearRelease,
                                          @RequestParam String countryOfOrigin, @RequestParam String productionCompany,
                                          @RequestParam Status status, @RequestParam("genres[]") List<String> genres){
        try{
            List<Genre> genresList = new ArrayList<>();
            for(String i: genres){
                genresList.add(Genre.valueOf(i));
            }
            Movie film = new Movie(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genresList);
            Movie addedFilm = movieService.addFilm(video, banner, film);
            if(addedFilm != null){
                return ResponseMessage.createResponse(HttpStatus.CREATED, "ADD FILM SUCCESSFULLY!", film);
            }
            return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD FILM FAILED!", null);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD FILM FAILED!", null);
    }
}
