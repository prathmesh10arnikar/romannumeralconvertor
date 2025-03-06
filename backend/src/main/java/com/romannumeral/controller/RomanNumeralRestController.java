package com.romannumeral.controller;

import com.romannumeral.dto.ResponseDTO;
import com.romannumeral.services.RomanNumeralService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class RomanNumeralRestController {
    private final RomanNumeralService romanNumeralService;

    private static final Logger logger = LoggerFactory.getLogger(RomanNumeralRestController.class);

    public RomanNumeralRestController(RomanNumeralService romanNumeralService) {
        this.romanNumeralService = romanNumeralService;
    }

    @RequestMapping(value = "/romannumeral", method = RequestMethod.GET)
    public ResponseEntity<?> convertToRomanNumeral(@RequestParam("query") int number) {
        try {
            String romanNumeral = romanNumeralService.getRomanNumeral(number);
            logger.info("Conversion successful: {} -> {}", number, romanNumeral);
            return ResponseEntity.ok(new ResponseDTO(String.valueOf(number), romanNumeral));
        } catch (IllegalArgumentException e) {
            logger.warn("Invalid request: ", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
