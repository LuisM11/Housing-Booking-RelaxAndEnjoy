package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "features")
public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_features")
    private Long id;
    private String name;
    private String icon;
    private Integer quantity;
//    @JsonBackReference
//    @OneToMany(mappedBy = "feature",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Set<ProductxFeature> productxfeature;
    @JsonIgnore
    @ManyToMany(mappedBy = "features")
    private Set<Product> products;


    public Feature(Long id, String name, String icon, Integer quantity) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.quantity = quantity;
    }

    public Feature(String name, String icon, Integer quantity) {
        this.name = name;
        this.icon = icon;
        this.quantity = quantity;
    }


    public Feature() {

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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }


    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
