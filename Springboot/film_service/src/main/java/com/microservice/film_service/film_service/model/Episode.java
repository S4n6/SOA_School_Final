package com.microservice.film_service.film_service.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document("episode")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Episode extends FilmModel{
    @Id
    private String id;
    private int episodeNumber;
    private String video;
    private String seasonID;
    public Episode(
            String name, int duration, int firstYearRelease,
            String countryOfOrigin, String productionCompany,
            Status status, List<Genre> genres, int episodeNumber, String seasonID, Date expectedReleaseDate){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
        this.episodeNumber = episodeNumber;
        this.seasonID = seasonID;
        this.setProperty(new ComingSoonProperty(expectedReleaseDate));
    }
    public Episode(
            String id, String video, String banner,
            String name, int duration, int firstYearRelease,
            String countryOfOrigin, String productionCompany,
            Status status, List<Genre> genres, int episodeNumber, String seasonID, Date expectedReleaseDate){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
        this.episodeNumber = episodeNumber;
        this.seasonID = seasonID;
        this.id = id;
        this.video = video;
        this.setBanner(banner);
        if(expectedReleaseDate != null){
            this.setProperty(new ComingSoonProperty(expectedReleaseDate));
        }
    }
}
