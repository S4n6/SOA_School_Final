package com.microservice.notificationservice.service;

import com.microservice.notificationservice.model.CommentNotification;

import java.util.List;

public interface CommentNotificationService {
    public CommentNotification getNotification(String notificationID);
    public List<CommentNotification> getNotifications(String userID);
    public CommentNotification addNotification(CommentNotification commentNotification);
}
