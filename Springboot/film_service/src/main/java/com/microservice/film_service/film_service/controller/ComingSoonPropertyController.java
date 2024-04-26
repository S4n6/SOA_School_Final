package com.microservice.film_service.film_service.controller;

import com.microservice.film_service.film_service.ResponseMessage;
import com.microservice.film_service.film_service.model.ComingSoonProperty;
import com.microservice.film_service.film_service.service.ComingSoonPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/property")
public class ComingSoonPropertyController {
    @Autowired
    private ComingSoonPropertyService propertyService;

    @PutMapping("/register")
    public ResponseEntity<Object> registerProperty(@RequestBody Map<String, Object> object){
        try {
            ComingSoonProperty property = propertyService.updateProperty(object.get("id").toString(), object.get("email").toString(), object.get("userID").toString());
            if(property != null){
                return ResponseMessage.createResponse(HttpStatus.OK, "REGISTER FILM SUCCESSFULLY!", property);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.NOT_FOUND, "REGISTER FILM FAILED!", null);
    }
}
