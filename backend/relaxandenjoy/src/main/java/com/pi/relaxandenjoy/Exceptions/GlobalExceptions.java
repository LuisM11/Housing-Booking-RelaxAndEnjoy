package com.pi.relaxandenjoy.Exceptions;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptions {
    private static  final Logger LOGGER = Logger.getLogger(GlobalExceptions.class);
    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<String> TreatmentResourceNotFoundException (ResourceNotFoundException rnfe) {
        LOGGER.error("We have an error: " + rnfe.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(rnfe.getMessage());
    }
    @ExceptionHandler({NoContentException.class})
    public ResponseEntity<String> noResourcesYet (NoContentException noContentException){
        LOGGER.error("We have an error: " + noContentException.getMessage());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body((noContentException.getMessage()));
    }
}
