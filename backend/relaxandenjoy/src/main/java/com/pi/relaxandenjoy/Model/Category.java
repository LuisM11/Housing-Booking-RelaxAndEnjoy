package com.pi.relaxandenjoy.Model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categories")
    private Long id;
    @Column(unique = true, nullable = false, length = 45)
    private String title;
    @Column
    private String description;
    @Column
    private String img;
    @OneToMany(mappedBy = "categories")
    private Set<Product> products;

    public Category(Long id, String title, String description, String img) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
    }

    public Category(String title, String description, String img) {
        this.title = title;
        this.description = description;
        this.img = img;
    }

    public Category() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
