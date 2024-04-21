package com.microservice.reviewservice.service.implement;

import com.microservice.reviewservice.model.Comment;
import com.microservice.reviewservice.repository.CommentRepository;
import com.microservice.reviewservice.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ImplCommentService implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<Comment> getComments(String filmID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "time");
        return commentRepository.findByFilmID(pageable, filmID).getContent();
    }

    @Override
    public Comment getLatestComment(String userID, String filmID) {
        return null;
    }

    @Override
    public void addComment(Comment comment) {
        try{
            commentRepository.save(comment);
        } catch(Exception e){
            e.printStackTrace();
        }
    }
}
