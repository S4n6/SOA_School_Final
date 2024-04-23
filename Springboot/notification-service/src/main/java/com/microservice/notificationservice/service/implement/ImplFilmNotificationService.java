package com.microservice.notificationservice.service.implement;

import com.microservice.notificationservice.model.FilmNotification;
import com.microservice.notificationservice.repository.FilmNotificationRepository;
import com.microservice.notificationservice.service.FilmNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImplFilmNotificationService implements FilmNotificationService {
    @Autowired
    private FilmNotificationRepository filmNotificationRepository;

    @Override
    public List<FilmNotification> getFilmNotifications(String userID) {
        return filmNotificationRepository.findByUserIDAndFilmID(userID);
    }

    @Override
    public FilmNotification getFilmNotification(String id) {
        return filmNotificationRepository.findById(id).orElse(null);
    }

    @Override
    public FilmNotification addFilmNotification(FilmNotification filmNotification) {
        try{
            return filmNotificationRepository.insert(filmNotification);
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
