package com.microservice.notificationservice.service.implement;

import com.microservice.notificationservice.model.AccountNotification;
import com.microservice.notificationservice.repository.AccountNotificationRepository;
import com.microservice.notificationservice.service.AccountNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImplAccountNotificationService implements AccountNotificationService {

    @Autowired
    private AccountNotificationRepository accountNotificationRepository;

    @Override
    public List<AccountNotification> getAccountNotifications(String userID) {
        return accountNotificationRepository.findByUserID(userID);
    }

    @Override
    public AccountNotification getAccountNotification(String id) {
        return accountNotificationRepository.findById(id).orElse(null);
    }

    @Override
    public AccountNotification addAccountNotification(AccountNotification accountNotification) {
        try{
            return accountNotificationRepository.insert(accountNotification);
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
