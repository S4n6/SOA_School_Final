package com.microservice.reviewservice.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.microservice.reviewservice.model.Comment;
import com.microservice.reviewservice.model.CustomPayload;
import com.microservice.reviewservice.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Date;

@Component
public class CommentWebSocketHandler implements WebSocketHandler {
    @Autowired
    private CommentService commentService;

    @Override
    public Mono<Void> handle(WebSocketSession session) {

        Flux<WebSocketMessage> flux = session.receive()
                .handle((webSocketMessage, synchronousSink) -> {
                    try {
                        CustomPayload payload = new ObjectMapper()
                                .readValue(
                                        webSocketMessage.getPayload().asInputStream().readAllBytes(),
                                        CustomPayload.class
                                );
                        synchronousSink.next(payload);

                        Comment comment = new Comment(payload.getUserID(), payload.getFilmID(), payload.getContent(), LocalDateTime.now());
                        commentService.addComment(comment);
                    } catch (IOException e) {
                        synchronousSink.error(e);
                    }
                })
                .map(msg -> session.textMessage(msg.toString()));
        return session.send(flux);
    }
}
