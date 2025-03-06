package com.romannumeral.dto;

public class ResponseDTO {
    private String input;
    private String output;
    public ResponseDTO(String input, String output) {
        this.input = input;
        this.output = output;
    }

    public String getInput() {
        return input;
    }

    public String getOutput() {
        return output;
    }
}
