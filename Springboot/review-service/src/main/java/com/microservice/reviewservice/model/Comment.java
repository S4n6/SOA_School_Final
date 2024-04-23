package com.microservice.reviewservice.model;

import com.microservice.reviewservice.service.CommentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document("comment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    private String id;

    private String userID;
    private String filmID;
    private String content;
    private LocalDateTime time;
    private String replyCommentID;

    public Comment(String userID, String filmID, String content, LocalDateTime time){
        this.userID = userID;
        this.filmID = filmID;
        this.content = content;
        this.time = time;
    }

    public Comment(String userID, String filmID, String content, LocalDateTime time, String replyComment){
        this.userID = userID;
        this.filmID = filmID;
        this.content = content;
        this.time = time;
        this.replyCommentID = replyComment;
    }
}
