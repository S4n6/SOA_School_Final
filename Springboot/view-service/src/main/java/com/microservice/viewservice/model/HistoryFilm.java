package com.microservice.viewservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("history_video")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HistoryFilm {
    @Id
    private String id;
    private String userID;
    private String filmID;
    private double duration;

    public HistoryFilm(String userID, String filmID, double duration){
        this.userID = userID;
        this.filmID = filmID;
        this.duration = duration;
    }
}
