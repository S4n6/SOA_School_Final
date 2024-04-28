package com.microservice.viewservice.repository;

import com.microservice.viewservice.model.HistoryFilm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface HistoryFilmRepository extends CrudRepository<HistoryFilm, String> {
    List<HistoryFilm> findByUserID(String userID);
    Page<HistoryFilm> findByUserID(Pageable pageable, String userID);
    Optional<HistoryFilm> findByUserIDAndFilmID(String userID, String filmID);
}
