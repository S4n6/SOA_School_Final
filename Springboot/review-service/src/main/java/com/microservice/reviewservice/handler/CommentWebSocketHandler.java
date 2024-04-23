package com.microservice.reviewservice.handler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microservice.reviewservice.model.Comment;
import com.microservice.reviewservice.model.CustomPayload;
import com.microservice.reviewservice.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Component
public class CommentWebSocketHandler implements WebSocketHandler {
    private final ReactorNettyWebSocketClient webSocketClient = new ReactorNettyWebSocketClient();
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
                        switch (payload.getAction()){
                            case "add":
                                Comment addedComment = new Comment(payload.getUserID(), payload.getFilmID(), payload.getContent(), LocalDateTime.now());
                                commentService.addComment(addedComment);
                                break;
                            case "reply":
                                Comment replyComment = new Comment(payload.getUserID(), payload.getFilmID(), payload.getContent(), LocalDateTime.now(), payload.getReplyCommentID());
                                Comment storedComment = commentService.addComment(replyComment);
                                Map<String, Object> message = new HashMap<>();
                                message.put("replyCommentID", storedComment.getId());
                                URI serverUri = new URI("ws://localhost:8080/api/v1/comment-notification");
                                webSocketClient.execute(
                                        serverUri,
                                        session.getHandshakeInfo().getHeaders(),
                                        subSession -> {
                                            try {
                                                return subSession.send(
                                                        Mono.just(subSession.textMessage(new ObjectMapper().writeValueAsString(message)))
                                                ).then(
                                                        subSession.receive()
                                                                .map(WebSocketMessage::getPayloadAsText)
                                                                .doOnNext(receivedMessage -> System.out.println("Received message: " + receivedMessage))
                                                                .then()
                                                ).doOnError(error -> {
                                                    System.out.print("Cannot connect to " + serverUri);
                                                });
                                            } catch (JsonProcessingException e) {
                                                throw new RuntimeException(e);
                                            }
                                        }).subscribe();
                                break;
                            case "edit":
                                Comment editComment = commentService.getCommentByID(payload.getId());
                                if(editComment != null){
                                    editComment.setContent(payload.getContent());
                                    editComment.setTime(LocalDateTime.now());
                                    commentService.updateComment(editComment);
                                }
                                break;
                            case "delete":
                                commentService.deleteComment(payload.getId());
                                break;
                        }

                    } catch (IOException e) {
                        e.printStackTrace();
                        synchronousSink.error(e);
                    } catch (URISyntaxException e) {
                        throw new RuntimeException(e);
                    }
                })
                .map(msg -> session.textMessage(msg.toString()));
        return session.send(flux);
    }
}
