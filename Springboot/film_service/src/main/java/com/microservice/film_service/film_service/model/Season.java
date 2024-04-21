package com.microservice.film_service.film_service.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;

@Document("season")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Season extends FilmModel{
    @Id
    private String iD;
    private int seasonNumber;
    private String tvShowID;

    public Season(String name, int duration, int firstYearRelease, String countryOfOrigin, String productionCompany, Status status, List<Genre> genres, int seasonNumber, String tvShowID){
        super(name, duration, firstYearRelease, countryOfOrigin, productionCompany, status, genres);
        this.seasonNumber = seasonNumber;
        this.tvShowID = tvShowID;
    }
}
