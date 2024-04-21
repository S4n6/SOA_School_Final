package com.microservice.film_service.film_service.controller;

import com.microservice.film_service.film_service.ResponseMessage;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.service.TVShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/tv_show")
public class TVShowController {
    @Autowired
    private TVShowService tvShowService;
    
    @GetMapping("/{id}")
    public ResponseEntity<Object> getTVShow(@PathVariable String id){
        TVShow film = tvShowService.getTVShow(id);
        if(film != null){
            return ResponseMessage.createResponse(HttpStatus.OK, "GET TV SHOW SUCCESSFULLY!", film);
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET TV SHOW FAILED!", null);
    }

    @GetMapping("")
    public ResponseEntity<Object> getTVShows(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false) Status status,
            @RequestParam(value = "genre", required = false) Genre genre,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size){
        try{
            List<TVShow> films = tvShowService.getTVShows(page, size, genre, name, status);
            return ResponseMessage.createResponse(HttpStatus.OK, "GET TV SHOW SUCCESSFULLY!", films);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET TV SHOW FAILED!", null);
    }

    //    Add film + upload film to cloudinary
    @PostMapping("")
    public ResponseEntity<Object> addTVShow(@RequestParam("banner") MultipartFile banner,
                                          @RequestParam String name, @RequestParam int duration,@RequestParam int firstYearRelease,
                                          @RequestParam String countryOfOrigin, @RequestParam String productionCompany,
                                          @RequestParam Status status, @RequestParam("genres[]") List<String> genres){
        try{
            List<Genre> genresList = new ArrayList<>();
            for(String i: genres){
                genresList.add(Genre.valueOf(i));
            }
            TVShow film = new TVShow(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genresList);
            TVShow addedFilm = tvShowService.addTVShow(banner, film);
            if(addedFilm != null){
                return ResponseMessage.createResponse(HttpStatus.CREATED, "ADD TV SHOW SUCCESSFULLY!", film);
            }
            return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD TV SHOW FAILED!", null);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "ADD TV SHOW FAILED!", null);
    }
}
