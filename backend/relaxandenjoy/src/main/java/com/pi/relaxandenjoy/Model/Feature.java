package com.pi.relaxandenjoy.Model;

import javax.persistence.*;

@Entity
@Table(name = "features")
public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_features")
    private Long id;
    private String name;
    private String icon;
    @OneToOne(mappedBy = "features")
    private Product products;

    public Feature(Long id, String name, String icon, Product products) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.products = products;
    }

    public Feature(String name, String icon, Product products) {
        this.name = name;
        this.icon = icon;
        this.products = products;
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

    public Product getProducts() {
        return products;
    }

    public void setProducts(Product products) {
        this.products = products;
    }
}
