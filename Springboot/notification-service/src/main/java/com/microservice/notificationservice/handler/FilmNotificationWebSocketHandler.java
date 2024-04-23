package com.microservice.notificationservice.handler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microservice.notificationservice.model.CustomPayload;
import com.microservice.notificationservice.model.FilmNotification;
import com.microservice.notificationservice.service.FilmNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Component
public class FilmNotificationWebSocketHandler implements WebSocketHandler {

    @Autowired
    private FilmNotificationService filmNotificationService;

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        Flux<WebSocketMessage> flux = session.receive()
                .map(msg -> {
                    try {
                        CustomPayload payload = new ObjectMapper().readValue(
                                msg.getPayloadAsText(),
                                CustomPayload.class);

                        // Process the payload and create a new account notification
                        FilmNotification filmNotification = new FilmNotification(
                                "Film notification",
                                "This film is released yesterday, don't forget to watch!",
                                LocalDateTime.now(),
                                "66200673fc13ae7cc6a242a1",
                                "/film/66200673fc13ae7cc6a242a2",
                                payload.getFilmID());

                        // Save the notification
                        FilmNotification stored = filmNotificationService.addFilmNotification(filmNotification);

                        // Serialize the stored notification as JSON string
                        return new ObjectMapper().writeValueAsString(stored.toMap());
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                        throw new RuntimeException("Error processing WebSocket message", e);
                    }
                })
                .map(session::textMessage);
        return session.send(flux);
    }
}
