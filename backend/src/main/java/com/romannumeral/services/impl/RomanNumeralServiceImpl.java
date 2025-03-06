package com.romannumeral.services.impl;

import com.romannumeral.services.RomanNumeralService;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class RomanNumeralServiceImpl implements RomanNumeralService {

    private static final Logger logger = LoggerFactory.getLogger(RomanNumeralServiceImpl.class);
    public String getRomanNumeral(int number) {

        if(number < 1 || number > 3999) {
            logger.error("Invalid input: Number out of range 1-3999 ", number);
            throw new IllegalArgumentException("Number out of range 1-3999");
        }

        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] characters = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < values.length; i++) {
            while(number - values[i] >= 0) {
                sb.append(characters[i]);
                number = number - values[i];
            }
        }

        logger.info("Roman numeral is " + sb + " for given number " + number);

        return sb.toString();
    }
}
