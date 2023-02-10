package com.pi.relaxandenjoy.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_images")
    private Long id;

    private String title;
    private String url;

//    @JsonBackReference
//    @ManyToOne()
//    @JoinColumn(name = "id_products", referencedColumnName = "id_products")
//    private Product product;

    public Image(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
//        this.product = product;
    }


    public Image(String title, String url) {
        this.title = title;
        this.url = url;

    }

    public Image() {
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }


}
