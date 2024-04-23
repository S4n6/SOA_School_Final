package com.microservice.notificationservice.repository;

import com.microservice.notificationservice.model.FilmNotification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FilmNotificationRepository extends MongoRepository<FilmNotification, String> {
    List<FilmNotification> findByUserIDAndFilmID(String userID);
    Optional<FilmNotification> findById(String id);
}
