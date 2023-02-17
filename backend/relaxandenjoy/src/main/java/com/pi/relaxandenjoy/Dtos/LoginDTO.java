package com.pi.relaxandenjoy.Dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LoginDTO {
    private String Email;
    private String password;

    public LoginDTO(String email, String password) {
        Email = email;
        this.password = password;
    }

    public LoginDTO() {
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
