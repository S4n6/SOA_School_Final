package com.microservice.film_service.film_service.repository;

import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PagingAndSortingTVShowRepository extends PagingAndSortingRepository<TVShow, String> {
    Page<TVShow> findAll(Pageable pageable);
    Page<TVShow> findByGenresContaining(Pageable pageable, Genre genre);
    @Query("{'name': { $regex: ?0, $options: 'i' }}")
    Page<TVShow> findByNameRegexIgnoreCase(Pageable pageable, String name);
    Page<TVShow> findByStatus(Pageable pageable, Status status);
    @Query("{$and: ["
            + "{'genres': { $elemMatch: { $eq: ?0 } }},"
            + "{'name': { $regex: ?1, $options: 'i' }},"
            + "{'status': ?2}"
            + "]}")
    Page<TVShow> findByGenresContainingAndNameRegexIgnoreCaseAndStatus(Pageable pageable, Genre genre, String name, Status status);
    Page<TVShow> findByGenresContainingAndStatus(Pageable pageable, Genre genre, Status status);
    @Query("{$and: ["
            + "{'genres': { $elemMatch: { $eq: ?0 } }},"
            + "{'name': { $regex: ?1, $options: 'i' }}"
            + "]}")
    Page<TVShow> findByGenresContainingAndNameRegexIgnoreCase(Pageable pageable, Genre genre, String name);
    @Query("{$and: ["
            + "{'name': { $regex: ?0, $options: 'i' }},"
            + "{'status': ?1}"
            + "]}")
    Page<TVShow> findByNameRegexIgnoreCaseAndStatus(Pageable pageable,String name, Status status);

}
