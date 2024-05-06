package com.microservice.viewservice.service;

import com.microservice.viewservice.model.HistoryFilm;

import java.util.Date;
import java.util.List;

public interface HistoryFilmService {
    public List<HistoryFilm> getFilmsByUserID(String userID, int page, int size);
    public long countViewByDate(Date startDate, Date endDate);
    public void addIntoListHistoryVideo(HistoryFilm film);
}
