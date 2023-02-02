package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

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


//    @JsonBackReference
//    @OneToMany(mappedBy = "feature",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Set<ProductxFeature> productxfeature;
    @JsonBackReference
    @ManyToMany(mappedBy = "features")
    private Set<Product> products;


    public Feature(Long id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public Feature(String name, String icon) {
        this.name = name;
        this.icon = icon;
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


}
