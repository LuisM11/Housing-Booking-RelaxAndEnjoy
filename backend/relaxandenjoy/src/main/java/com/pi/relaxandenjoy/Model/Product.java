package com.pi.relaxandenjoy.Model;

import javax.persistence.*;
import java.util.Set;

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
    @ManyToOne
    @JoinColumn(name = "id_products",updatable = false, insertable = false)
    private Category categories;
    @ManyToOne
    @JoinColumn(name = "id_products", updatable = false, insertable = false)
    private City city;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "products_has_features",
            joinColumns =
                    { @JoinColumn(name = "id_products")},
            inverseJoinColumns =
                    { @JoinColumn(name = "id_features")})
    private Feature features;

    @OneToMany(mappedBy = "products")
    private Set<Image> images;

    public Product(Long id, String name, Float popularity, String title, String crimg, String location, String description, Category categories, City city, Feature characteristics, Set<Image> images) {
        this.id = id;
        this.title = title;
        this.crimg = crimg;
        this.location = location;
        this.description = description;
        this.categories = categories;
        this.city = city;
        this.features = features;
        this.images = images;
        this.popularity = popularity;
        this.name = name;
    }

    public Product(String title, String name, Float popularity, String crimg, String location, String description, Category categories, City city, Feature characteristics, Set<Image> images) {
        this.title = title;
        this.crimg = crimg;
        this.location = location;
        this.description = description;
        this.categories = categories;
        this.city = city;
        this.features = features;
        this.images = images;
        this.popularity = popularity;
        this.name = name;
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

    public Feature getfeatures() {
        return features;
    }

    public void setfeatures(Feature features) {
        this.features = features;
    }

    public Set<Image> getImages() {
        return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }
}
