package com.microservice.film_service.film_service.controller;

import com.microservice.film_service.film_service.ResponseMessage;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Season;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.service.SeasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/season")
public class SeasonController {
    @Autowired
    private SeasonService seasonService;

    @GetMapping("/{id}")
    public ResponseEntity<Object> getSeason(@PathVariable String id){
        Season season = seasonService.getSeason(id);
        if(season != null){
            return ResponseMessage.createResponse(HttpStatus.OK, "GET SEASON SUCCESSFULLY!", season);
        }
        return ResponseMessage.createResponse(HttpStatus.OK, "GET SEASON FAILED!", null);
    }

    @GetMapping("")
    public ResponseEntity<Object> getSeasons(@RequestParam String tvShowID){
        try{
            List<Season> seasons = seasonService.getSeasons(tvShowID);
            return ResponseMessage.createResponse(HttpStatus.OK, "GET SEASON SUCCESSFULLY!", seasons);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET SEASON FAILED!", null);
    }

    @PostMapping("")
    public ResponseEntity<Object> addSeason(@RequestParam("banner") MultipartFile banner,
                                            @RequestParam String name, @RequestParam int duration, @RequestParam int firstYearRelease,
                                            @RequestParam String countryOfOrigin, @RequestParam String productionCompany,
                                            @RequestParam Status status, @RequestParam("genres[]") List<String> genres,
                                            @RequestParam int seasonNumber, @RequestParam String tvShowID){
        try{
            List<Genre> genresList = new ArrayList<>();
            for(String i: genres){
                genresList.add(Genre.valueOf(i));
            }
            Season season = new Season(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genresList, seasonNumber, tvShowID);
            Season addedSeason = seasonService.addSeason(banner, season);
            if(addedSeason != null){
                return ResponseMessage.createResponse(HttpStatus.CREATED, "ADD SEASON SUCCESSFULLY!", season);
            }
            return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD SEASONS FAILED!", null);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET SEASONS FAILED!", null);
    }
}
