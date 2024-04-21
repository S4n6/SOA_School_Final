package com.microservice.reviewservice.controller;

import com.microservice.reviewservice.ResponseMessage;
import com.microservice.reviewservice.model.Rate;
import com.microservice.reviewservice.service.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/rate")
public class RateController {

    @Autowired
    private RateService rateService;

    @GetMapping("/{filmID}")
    public ResponseEntity<Object> getRate(@PathVariable String filmID){
        List<Rate> rates = rateService.getRatesByFilmID(filmID);
        if(rates.isEmpty()){
            return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "DON'T HAVE ANY VOTE FOR THIS FILM", null);
        }
        int count = 0;
        int total = 0;
        for(Rate rate: rates){
            count++;
            total+= rate.getScore();
        }

        Map<String, Object> result = new HashMap<>();
        result.put("count", count);
        result.put("average", (double) total / count);
        return ResponseMessage.createResponse(HttpStatus.OK, "GET RATE SUCCESSFULLY!", result);
    }

    @PostMapping("")
    public ResponseEntity<Object> addRate(@RequestBody Rate rate){
        try{
            rateService.addRate(rate);
        } catch(Exception e){
            e.printStackTrace();
        }
        return getRate(rate.getFilmID());
    }
    @PutMapping("")
    public ResponseEntity<Object> updateRate(@RequestBody Rate rate){
        try{
            rateService.updateRate(rate);
        } catch(Exception e){
            e.printStackTrace();
        }
        return getRate(rate.getFilmID());
    }
}
