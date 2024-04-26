package com.microservice.film_service.film_service.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document("movie")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Movie extends FilmModel{
    @Id
    private String id;
    private String video;

    public Movie(String name, int duration, int firstYearRelease, String countryOfOrigin, String productionCompany, Status status, List<Genre> genres){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
    }

    public Movie(String name, int duration, int firstYearRelease, String countryOfOrigin, String productionCompany, Status status, List<Genre> genres, Date expectedReleaseDate){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
        if(expectedReleaseDate != null){
            this.setProperty(new ComingSoonProperty(expectedReleaseDate));
        }
    }

    public Movie(String id, String video, String banner, String name, int duration, int firstYearRelease, String countryOfOrigin, String productionCompany, Status status, List<Genre> genres, Date expectedReleaseDate){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
        this.id = id;
        this.setBanner(banner);
        this.video = video;
        if(expectedReleaseDate != null){
            this.setProperty(new ComingSoonProperty(expectedReleaseDate));
        }
    }
}
