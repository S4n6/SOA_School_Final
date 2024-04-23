package com.microservice.notificationservice.repository;

import com.microservice.notificationservice.model.CommentNotification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentNotificationRepository extends MongoRepository<CommentNotification, String> {
    Optional<CommentNotification> findById(String id);
    List<CommentNotification> findByUserID(String userID);
}
