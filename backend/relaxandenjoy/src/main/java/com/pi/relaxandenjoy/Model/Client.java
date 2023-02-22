package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@DiscriminatorValue("Client")
public class Client extends User{


    @JsonIgnore
    @OneToMany(mappedBy = "client",cascade = CascadeType.ALL)
    private Set<Reservation> reservation;

    @ManyToOne
    @JoinColumn(name = "id_cities",referencedColumnName = "id_cities")
    private City city;


    public Client() {
    }

    public Client(Long id, String name, String surname, String email, String password, City city) {
        super(id, name, surname, email, password);
        this.city = city;
    }

    public Client(String name, String surname, String email, String password, City city) {
        super(name, surname, email, password);
        this.city = city;
    }

    public Set<Reservation> getReservation() {
        return reservation;
    }

    public void setReservation(Set<Reservation> reservation) {
        this.reservation = reservation;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
