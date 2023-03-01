package com.pi.relaxandenjoy.Dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SignUpDTO {
    public interface withoutPassword{}

    @Min(1)
    @JsonView(SignUpDTO.withoutPassword.class)
    private Long id;
    @NotBlank
    @Size(max = 50)
    @JsonView(SignUpDTO.withoutPassword.class)
    private String name;

    @NotBlank
    @Size(max = 50)
    @JsonView(SignUpDTO.withoutPassword.class)
    private String surname;

    @NotBlank
    @Email
    @JsonView(SignUpDTO.withoutPassword.class)
    private String email;
    @NotBlank
    @Size(min = 6)
    private String password;

//    @Min(1)
//    private Long city;
    public SignUpDTO() {
    }

    public Long getId() {
        return id;
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

//    public Long getCity() {
//        return city;
//    }
//
//    public void setCity(Long city) {
//        this.city = city;
//    }

}
