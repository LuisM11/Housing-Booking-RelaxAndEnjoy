package com.pi.relaxandenjoy.Model;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_images")
    private Long id;

    private String title;
    private String url;

    @ManyToOne
    @JoinColumn(name = "id_images", insertable = false, updatable = false)
    private Product products;

    public Image(Long id, String title, String url, Product products) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.products = products;
    }

    public Image(String title, String url, Product products) {
        this.title = title;
        this.url = url;
        this.products = products;
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

    public Product getProducts() {
        return products;
    }

    public void setProducts(Product products) {
        this.products = products;
    }
}
