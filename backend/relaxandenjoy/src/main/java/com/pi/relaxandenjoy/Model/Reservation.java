package com.pi.relaxandenjoy.Model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reservation")
    private Long id;
    @Column(name = "init_date")
    private LocalDate initDate;
    @Column(name = "final_date")
    private LocalDate finalDate;
    @Column(name = "init_time")
    private LocalTime initTime;

    @ManyToOne
    @JoinColumn(name = "id_product",referencedColumnName = "id_products")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "id_user",referencedColumnName = "id_user")
    private Client client;



    public Reservation(Long id, LocalDate initDate, LocalDate finalDate, LocalTime initTime, Product product, Client client) {
        this.id = id;
        this.initDate = initDate;
        this.finalDate = finalDate;
        this.initTime = initTime;
        this.product = product;
        this.client = client;
    }

    public Reservation() {
    }

    public Reservation(LocalDate initDate, LocalDate finalDate, LocalTime initTime, Product product, Client client) {
        this.initDate = initDate;
        this.finalDate = finalDate;
        this.initTime = initTime;
        this.product = product;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getInitDate() {
        return initDate;
    }

    public void setInitDate(LocalDate initDate) {
        this.initDate = initDate;
    }

    public LocalDate getFinalDate() {
        return finalDate;
    }

    public void setFinalDate(LocalDate finalDate) {
        this.finalDate = finalDate;
    }

    public LocalTime getInitTime() {
        return initTime;
    }

    public void setInitTime(LocalTime initTime) {
        this.initTime = initTime;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
