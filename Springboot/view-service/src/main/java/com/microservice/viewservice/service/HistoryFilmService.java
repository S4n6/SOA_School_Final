package com.microservice.viewservice.service;

import com.microservice.viewservice.model.HistoryFilm;

import java.util.List;

public interface HistoryFilmService {
    public List<HistoryFilm> getFilmsByUserID(String userID, int page, int size);
    public void addIntoListHistoryVideo(HistoryFilm film);
}
