package com.microservice.film_service.film_service.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("movie")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Movie extends FilmModel{
    @Id
    private String iD;
    private String video;

    public Movie(String name, int duration, int firstYearRelease, String countryOfOrigin, String productionCompany, Status status, List<Genre> genres){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
    }
}
