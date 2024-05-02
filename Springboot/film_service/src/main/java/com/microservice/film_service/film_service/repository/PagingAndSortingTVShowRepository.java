package com.microservice.film_service.film_service.repository;

import com.microservice.film_service.film_service.model.Genre;
import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.TVShow;
import com.microservice.film_service.film_service.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface PagingAndSortingTVShowRepository extends PagingAndSortingRepository<TVShow, String> {
    Page<TVShow> findAll(Pageable pageable);
    Page<TVShow> findByGenresInAndNameRegexIgnoreCaseAndCountryOfOriginInAndFirstYearReleaseIn(
            Pageable pageable, List<Genre> genres, String name, List<String> countries, List<Integer> years);
}
