package com.microservice.reviewservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@FeignClient(name = "film-service")
public interface FilmServiceClient {
    @PutMapping(value = "/api/v1/movie", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateRateMovie(@RequestBody Map<String, Object> map);

    @PutMapping(value = "/api/v1/tv_show", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateRateTvShow(@RequestBody Map<String, Object> map);
}
