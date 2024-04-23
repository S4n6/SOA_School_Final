package com.microservice.notificationservice.repository;

import com.microservice.notificationservice.model.AccountNotification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountNotificationRepository extends MongoRepository<AccountNotification, String> {
    Optional<AccountNotification> findById(String id);
    List<AccountNotification> findByUserID(String userID);
}
