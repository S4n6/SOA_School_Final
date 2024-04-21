package com.microservice.reviewservice.repository;

import com.microservice.reviewservice.model.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {
    Page<Comment> findByFilmID(Pageable pageable, String filmID);
}
