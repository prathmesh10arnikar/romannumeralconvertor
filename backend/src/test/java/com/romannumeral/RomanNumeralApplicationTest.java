package com.romannumeral;

import com.romannumeral.controller.RomanNumeralRestController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class RomanNumeralApplicationTest {

    @Autowired
    private RomanNumeralRestController romanNumeralRestController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(romanNumeralRestController).build();
    }

	@Test
	public void shouldConvertToRomanNumeral_validInput() throws Exception {
        mockMvc.perform(get("/romannumeral?query=12")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.input").value(12))
                .andExpect(jsonPath("$.output").value("XII"));
	}

    @Test
    public void shouldConvertToRomanNumeral_invalidInput() throws Exception {
        mockMvc.perform(get("/romannumeral?query=4000")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andExpect(result ->
                        result.getResponse().getContentAsString().contains("Number must be between 1 and 3999"));
    }

}
