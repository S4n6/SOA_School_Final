package com.microservice.film_service.film_service.service.implement;

import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.model.WatchList;
import com.microservice.film_service.film_service.repository.WatchListRepository;
import com.microservice.film_service.film_service.service.WatchListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImplWatchListService implements WatchListService {
    @Autowired
    private WatchListRepository watchListRepository;

    @Override
    public List<WatchList> getWatchListsByUserID(String userID) {
        return watchListRepository.findByUserID(userID);
    }

    @Override
    public WatchList getWatchListById(String id) {
        return watchListRepository.findById(id).orElse(null);
    }

    @Override
    public WatchList addWatchList(WatchList watchList) {
        try{
            List<WatchList> watchLists = getWatchListsByUserID(watchList.getUserID());
            if(watchLists.size() >= 5){
                return null;
            }
            return watchListRepository.insert(watchList);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public WatchList addMovieIntoWatchList(String id, Movie film) {
        try {
            WatchList watchList = watchListRepository.findById(id).orElse(null);
            if(watchList.getMovies().size() + watchList.getTvShows().size() >= 5){
                return null;
            }
            if(watchList != null){
                watchList.getMovies().add(film);
                return watchListRepository.save(watchList);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public WatchList removeMovieFromWatchList(String id, Movie film) {
        try {
            WatchList watchList = watchListRepository.findById(id).orElse(null);
            if(watchList.getMovies().size() + watchList.getTvShows().size() >= 5){
                return null;
            }
            if(watchList != null){
                watchList.getMovies().remove(film);
                return watchListRepository.save(watchList);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public WatchList addTVShowIntoWatchList(String id, TVShow film) {
        try {
            WatchList watchList = watchListRepository.findById(id).orElse(null);
            if(watchList != null){
                watchList.getTvShows().add(film);
                return watchListRepository.save(watchList);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public WatchList removeTVShowFromWatchList(String id, TVShow film) {
        try {
            WatchList watchList = watchListRepository.findById(id).orElse(null);
            if(watchList != null){
                watchList.getTvShows().remove(film);
                return watchListRepository.save(watchList);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean removeWatchList(String id) {
        try {
            watchListRepository.deleteById(id);
            return true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
