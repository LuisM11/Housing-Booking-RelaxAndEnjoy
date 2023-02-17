package com.pi.relaxandenjoy.Dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SignUpDTO {
    private Long id;
    @NotBlank
    @Size(max = 50)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String surname;

    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Size(min = 6)
    private String password;

    @Min(1)
    private Long city;
    public SignUpDTO() {
    }

    public SignUpDTO(String name, String surname, String email, String password, Long city) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getCity() {
        return city;
    }

    public void setCity(Long city) {
        this.city = city;
    }
}
