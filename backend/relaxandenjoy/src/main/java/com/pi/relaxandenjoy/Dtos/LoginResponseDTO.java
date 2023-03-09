package com.pi.relaxandenjoy.Dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponseDTO{
    @JsonProperty("id")

    private Long id;
    @JsonProperty("fullname")
    private String fullname;
    @JsonProperty("email")
    private String email;

    @JsonProperty("role")
    private Long role;

    public LoginResponseDTO(Long id, String fullname, String email, Long role) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.role = role;
    }

    public void setRole(Long role) {
        this.role = role;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
