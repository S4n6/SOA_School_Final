package com.microservice.film_service.film_service.controller;

import com.microservice.film_service.film_service.ResponseMessage;
import com.microservice.film_service.film_service.model.Episode;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Status;
import com.microservice.film_service.film_service.service.EpisodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/episode")
public class EpisodeController {

    @Autowired
    private EpisodeService episodeService;

    @GetMapping("/{id}")
    public ResponseEntity<Object> getEpisode(@PathVariable String id){
        Episode episode = episodeService.getEpisode(id);

        if(episode != null){
            return ResponseMessage.createResponse(HttpStatus.OK, "GET EPISODE SUCCESSFULLY!", episode);
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET EPISODE FAILED!", null);
    }

    @GetMapping("")
    public ResponseEntity<Object> getEpisodes(@RequestParam String seasonID){
        try{
            List<Episode> episodes = episodeService.getEpisodes(seasonID);
            return ResponseMessage.createResponse(HttpStatus.OK, "GET EPISODES SUCCESSFULLY!", episodes);
        }catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "GET EPISODES FAILED!", null);
    }

    @PostMapping("")
    public ResponseEntity<Object> addEpisode(@RequestParam("video") MultipartFile video, @RequestParam("banner") MultipartFile banner,
                                             @RequestParam String name, @RequestParam int duration, @RequestParam int firstYearRelease,
                                             @RequestParam String countryOfOrigin, @RequestParam String productionCompany,
                                             @RequestParam Status status, @RequestParam("genres[]") List<String> genres,
                                             @RequestParam(defaultValue = "1") int episodeNumber, @RequestParam String seasonID){
        try {
            List<Genre> genresList = new ArrayList<>();
            for(String i: genres){
                genresList.add(Genre.valueOf(i));
            }
            Episode episode = new Episode(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genresList, episodeNumber, seasonID);
            Episode addedEpisode = episodeService.addEpisode(video, banner, episode);
            if(addedEpisode != null){
                return ResponseMessage.createResponse(HttpStatus.CREATED, "ADD EPISODE SUCCESSFULLY!", addedEpisode);
            }
            return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD EPISODE FAILED!", null);
        }catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.INTERNAL_SERVER_ERROR, "ADD EPISODE FAILED!", null);
    }
}
