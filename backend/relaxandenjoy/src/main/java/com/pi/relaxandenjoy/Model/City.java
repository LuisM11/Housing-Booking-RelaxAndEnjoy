package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cities")
    private Long id;
    @Column
    private String name;
    @OneToMany(mappedBy = "city",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products;

    public City(Long id, String name, Set<Product> products) {
        this.id = id;
        this.name = name;
        this.products = products;
    }

    public City(String name, Set<Product> products) {
        this.name = name;
        this.products = products;
    }

    public City() {
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

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
