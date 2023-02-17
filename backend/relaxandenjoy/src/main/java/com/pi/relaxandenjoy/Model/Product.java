package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

//@JsonIgnoreProperties({"productxfeature"})
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_products")
    private Long id;
    @Column
    private String title;
    @Column
    private String name;
    @Column
    private Float popularity;
    @Column
    private String crimg;
    @Column
    private String location;
    @Column
    private String description;
    @ManyToOne()
    @JoinColumn(name = "id_categories",referencedColumnName = "id_categories")
    private Category categories;
    @ManyToOne
    @JoinColumn(name = "id_cities", referencedColumnName = "id_cities")
    private City city;

//    @JsonManagedReference
//    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Set<ProductxFeature>  productxfeature;

    @ManyToMany
    @JoinTable(name = "products_has_features",
            joinColumns =
                    { @JoinColumn(name = "id_products")},
            inverseJoinColumns =
                    { @JoinColumn(name = "id_features")})
    private Set<Feature> features;

//    @JsonManagedReference
    @OneToMany( cascade = CascadeType.ALL)
    @JoinColumn(name = "id_products")
    @NotNull
    private Set<Image> images;

    public Product(Long id, String title, String name, Float popularity, String crimg, String location, String description, Category categories, City city, Set<Feature> features, Set<Image> images) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.popularity = popularity;
        this.crimg = crimg;
        this.location = location;
        this.description = description;
        this.categories = categories;
        this.city = city;
        this.features = features;
        this.images = images;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPopularity() {
        return popularity;
    }

    public void setPopularity(Float popularity) {
        this.popularity = popularity;
    }

    public String getCrimg() {
        return crimg;
    }

    public void setCrimg(String crimg) {
        this.crimg = crimg;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategories() {
        return categories;
    }

    public void setCategories(Category categories) {
        this.categories = categories;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Set<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(Set<Feature> features) {
        this.features = features;
    }

    public Set<Image> getImages() {
        return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", name='" + name + '\'' +
                ", popularity=" + popularity +
                ", crimg='" + crimg + '\'' +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", categories=" + categories +
                ", city=" + city +
                ", features=" + features +
                ", images=" + images +
                '}';
    }
}
