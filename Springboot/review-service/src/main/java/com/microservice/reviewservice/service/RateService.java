package com.microservice.reviewservice.service;

import com.microservice.reviewservice.model.Rate;

import java.util.List;

public interface RateService {

    public Rate getRateByUserAndFilm(String userID, String filmID);
    public List<Rate> getRatesByFilmID(String filmID);
    public void addRate(Rate rate);
    public void updateRate(Rate rate);
}
