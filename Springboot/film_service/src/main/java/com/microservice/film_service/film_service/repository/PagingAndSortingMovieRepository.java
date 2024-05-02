package com.microservice.film_service.film_service.repository;

import com.microservice.film_service.film_service.model.Movie;
import com.microservice.film_service.film_service.model.Genre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PagingAndSortingMovieRepository extends CrudRepository<Movie, String> {
    Page<Movie> findByGenresInAndNameRegexIgnoreCaseAndCountryOfOriginInAndFirstYearReleaseIn(
            Pageable pageable, List<Genre> genres, String name, List<String> countries, List<Integer> years);

}
