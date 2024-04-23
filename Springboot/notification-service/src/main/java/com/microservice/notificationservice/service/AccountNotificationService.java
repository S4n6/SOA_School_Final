package com.microservice.notificationservice.service;

import com.microservice.notificationservice.model.AccountNotification;

import java.util.List;

public interface AccountNotificationService {
    public List<AccountNotification> getAccountNotifications(String userID);
    public AccountNotification getAccountNotification(String id);
    public AccountNotification addAccountNotification(AccountNotification accountNotification);
}
