package com.microservice.notificationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Document("comment-notification")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentNotification extends Notification{
    @Id
    private String id;

    private String commentID;

    public CommentNotification(String title, String content, LocalDateTime createdAt, String userID, String destination, String commentID){
        super(title, content, createdAt, userID, destination);
        this.commentID = commentID;
    }

    public CommentNotification(String commentID){
        this.commentID = commentID;
    }

}
