package com.microservice.viewservice.repository;

import com.microservice.viewservice.model.HistoryFilm;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface HistoryFilmRepository extends MongoRepository<HistoryFilm, String> {
    List<HistoryFilm> findByUserID(String userID);
    Optional<HistoryFilm> findByUserIDAndFilmID(String userID, String filmID);
}
