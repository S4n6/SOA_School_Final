package com.microservice.film_service.film_service.repository;

import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PagingAndSortingMovieRepository extends CrudRepository<Movie, String> {
    Page<Movie> findAll(Pageable pageable);
    Page<Movie> findByGenresContaining(Pageable pageable, Genre genre);
    @Query("{'name': { $regex: ?0, $options: 'i' }}")
    Page<Movie> findByNameRegexIgnoreCase(Pageable pageable, String name);
    Page<Movie> findByStatus(Pageable pageable, Status status);
    @Query("{$and: ["
            + "{'genres': { $elemMatch: { $eq: ?0 } }},"
            + "{'name': { $regex: ?1, $options: 'i' }},"
            + "{'status': ?2}"
            + "]}")
    Page<Movie> findByGenresContainingAndNameRegexIgnoreCaseAndStatus(Pageable pageable, Genre genre, String name, Status status);
    Page<Movie> findByGenresContainingAndStatus(Pageable pageable, Genre genre, Status status);
    @Query("{$and: ["
            + "{'genres': { $elemMatch: { $eq: ?0 } }},"
            + "{'name': { $regex: ?1, $options: 'i' }}"
            + "]}")
    Page<Movie> findByGenresContainingAndNameRegexIgnoreCase(Pageable pageable, Genre genre, String name);
    @Query("{$and: ["
            + "{'name': { $regex: ?0, $options: 'i' }},"
            + "{'status': ?1}"
            + "]}")
    Page<Movie> findByNameRegexIgnoreCaseAndStatus(Pageable pageable,String name, Status status);

}
