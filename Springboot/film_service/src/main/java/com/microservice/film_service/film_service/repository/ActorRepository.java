package com.microservice.film_service.film_service.repository;

import com.microservice.film_service.film_service.model.Actor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActorRepository extends MongoRepository<Actor, String> {
}
