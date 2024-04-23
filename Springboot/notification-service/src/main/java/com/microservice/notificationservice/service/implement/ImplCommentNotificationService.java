package com.microservice.notificationservice.service.implement;

import com.microservice.notificationservice.model.CommentNotification;
import com.microservice.notificationservice.repository.CommentNotificationRepository;
import com.microservice.notificationservice.service.CommentNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImplCommentNotificationService implements CommentNotificationService {
    @Autowired
    private CommentNotificationRepository commentNotificationRepository;

    @Override
    public CommentNotification getNotification(String notificationID) {
        return commentNotificationRepository.findById(notificationID).orElse(null);
    }

    @Override
    public List<CommentNotification> getNotifications(String userID) {
        return commentNotificationRepository.findByUserID(userID);
    }

    @Override
    public void addNotification(CommentNotification commentNotification) {
        try{
            commentNotificationRepository.insert(commentNotification);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
