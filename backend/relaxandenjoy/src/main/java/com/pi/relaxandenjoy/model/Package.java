package com.pi.relaxandenjoy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Time;
import java.util.List;

@Entity
@Table(name = "package")
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accommodationType;
    @Column(columnDefinition = "TEXT")
    private String packageDescription;
    private Double score;
    private Time checkInTime;
    private Time checkOuTime;
    @ManyToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;

    //@OneToMany(mappedBy = "package", cascade = CascadeType.ALL)
    //@JsonIgnore

    private List<Image> image;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Package() {
    }

    public Package(Long id, String accommodationType, String packageDescription, Double score, Time checkInTime, Time checkOuTime, Location location, List<Image> image, Category category) {
        this.id = id;
        this.accommodationType = accommodationType;
        this.packageDescription = packageDescription;
        this.score = score;
        this.checkInTime = checkInTime;
        this.checkOuTime = checkOuTime;
        this.location = location;
        this.image = image;
        this.category = category;
    }




}

