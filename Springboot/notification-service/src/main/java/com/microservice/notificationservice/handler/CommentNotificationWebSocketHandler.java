package com.microservice.notificationservice.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.microservice.notificationservice.model.CommentNotification;
import com.microservice.notificationservice.model.CustomPayload;
import com.microservice.notificationservice.service.CommentNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class CommentNotificationWebSocketHandler implements WebSocketHandler {

    @Autowired
    private CommentNotificationService commentNotificationService;

    @Override
    public Mono<Void> handle(WebSocketSession session) {

        Flux<WebSocketMessage> flux = session.receive()
                .map(webSocketMessage -> {
                    try {
                        CustomPayload payload = new ObjectMapper()
                                .readValue(
                                        webSocketMessage.getPayload().asInputStream().readAllBytes(),
                                        CustomPayload.class
                                );
                        CommentNotification commentNotification = new CommentNotification(
                                "A replied your comment",
                                "A replied your comment, click to read detail!",
                                LocalDateTime.now(),
                                "66200673fc13ae7cc6a242a1",
                                "/film/66200673fc13ae7cc6a242a2",
                                payload.getReplyCommentID());
                        CommentNotification addedNotification = commentNotificationService.addNotification(commentNotification);

                        return new ObjectMapper().writeValueAsString(addedNotification.toMap());
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    return null;
                })
                .map(msg -> session.textMessage(msg.toString()));
        return session.send(flux);
    }
}
