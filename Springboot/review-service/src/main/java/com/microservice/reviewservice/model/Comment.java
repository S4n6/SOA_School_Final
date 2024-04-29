package com.microservice.reviewservice.model;

import com.microservice.reviewservice.service.CommentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Document("comment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    private String id;

    private User user;
    private String filmID;
    private String content;
    private LocalDateTime time;
    private String replyCommentID;

    public Comment(User user, String filmID, String content, LocalDateTime time){
        this.user = user;
        this.filmID = filmID;
        this.content = content;
        this.time = time;
    }

    public Comment(User user, String filmID, String content, LocalDateTime time, String replyComment){
        this.user = user;
        this.filmID = filmID;
        this.content = content;
        this.time = time;
        this.replyCommentID = replyComment;
    }

    public Map<String, Object> toMap(){
        Map<String, Object> map = new HashMap<>();
        map.put("id", this.id);
        map.put("user", this.user.toMap());
        map.put("filmID", this.filmID);
        map.put("content", this.content);
        Date date = Date.from(this.time.atZone(ZoneId.systemDefault()).toInstant());
        map.put("time", date);
        map.put("replyCommentID", this.replyCommentID);
        return map;
    }
}
