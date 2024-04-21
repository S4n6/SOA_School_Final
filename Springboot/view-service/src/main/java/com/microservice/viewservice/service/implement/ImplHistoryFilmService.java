package com.microservice.viewservice.service.implement;

import com.microservice.viewservice.model.HistoryFilm;
import com.microservice.viewservice.repository.HistoryFilmRepository;
import com.microservice.viewservice.service.HistoryFilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImplHistoryFilmService implements HistoryFilmService {

    @Autowired
    private HistoryFilmRepository historyFilmRepository;

    @Override
    public List<HistoryFilm> getFilmsByUserID(String userID) {
        return historyFilmRepository.findByUserID(userID);
    }

//    public Map<String, Object> getFilmAndDuration(String id){
//
//    }

    @Override
    public void addIntoListHistoryVideo(HistoryFilm film) {
        try{
            HistoryFilm historyFilm = historyFilmRepository.findByUserIDAndFilmID(film.getUserID(), film.getFilmID()).orElse(null);

            if(historyFilm != null){
                historyFilm.setDuration(film.getDuration());
                historyFilmRepository.save(historyFilm);
            }
            else{
                historyFilmRepository.insert(film);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
