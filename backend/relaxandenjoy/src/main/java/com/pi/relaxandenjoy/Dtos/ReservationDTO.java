package com.pi.relaxandenjoy.Dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;

import java.time.LocalDate;
import java.time.LocalTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationDTO {
    public interface JustDateTime{}
    @JsonView(JustDateTime.class)
    private Long id;
    @JsonView(JustDateTime.class)
    private LocalDate initDate;
    @JsonView(JustDateTime.class)
    private LocalDate finaltDate;
    @JsonView(JustDateTime.class)
    private LocalTime initTime;
    private Long product;
    private  Long client;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long city;

    public ReservationDTO() {
    }

    public ReservationDTO(Long id, LocalDate initDate, LocalDate finaltDate, LocalTime initTime, Long product, Long client, Long city) {
        this.id = id;
        this.initDate = initDate;
        this.finaltDate = finaltDate;
        this.initTime = initTime;
        this.product = product;
        this.client = client;
        this.city = city;
    }

    public LocalDate getInitDate() {
        return initDate;
    }

    public void setInitDate(LocalDate initDate) {
        this.initDate = initDate;
    }

    public LocalDate getFinaltDate() {
        return finaltDate;
    }

    public void setFinaltDate(LocalDate finaltDate) {
        this.finaltDate = finaltDate;
    }

    public LocalTime getInitTime() {
        return initTime;
    }

    public void setInitTime(LocalTime initTime) {
        this.initTime = initTime;
    }

    public Long getProduct() {
        return product;
    }

    public Long getCity() {
        return city;
    }

    public void setCity(Long city) {
        this.city = city;
    }

    public void setProduct(Long product) {
        this.product = product;
    }

    public Long getUser() {
        return client;
    }

    public void setUser(Long client) {
        this.client = client;
    }
}
