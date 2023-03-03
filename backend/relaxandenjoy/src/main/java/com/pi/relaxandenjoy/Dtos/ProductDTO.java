package com.pi.relaxandenjoy.Dtos;

import com.pi.relaxandenjoy.Model.Feature;

import java.util.List;


public class ProductDTO {

    private Long id;
    private Long city;
    private Long category;
    private String address;
    private String description;
    private String location;
    private String title;
    private String name;
    private String rules;
    private String healthAndSecurity;
    private String politics;
    private Float popularity;
    private List<Long> feature;
    private List<Feature> newFeature;

    public ProductDTO(Long city, Long category, String address, String description, String location, String title, String name, String rules, String healthAndSecurity, String politics, Float popularity, List<Long> feature, List<Feature> newFeature) {
        this.city = city;
        this.category = category;
        this.address = address;
        this.description = description;
        this.location = location;
        this.title = title;
        this.name = name;
        this.rules = rules;
        this.healthAndSecurity = healthAndSecurity;
        this.politics = politics;
        this.popularity = popularity;
        this.feature = feature;
        this.newFeature = newFeature;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCity() {
        return city;
    }

    public void setCity(Long city) {
        this.city = city;
    }

    public Long getCategory() {
        return category;
    }

    public void setCategory(Long category) {
        this.category = category;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
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

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }

    public String getHealthAndSecurity() {
        return healthAndSecurity;
    }

    public void setHealthAndSecurity(String healthAndSecurity) {
        this.healthAndSecurity = healthAndSecurity;
    }

    public String getPolitics() {
        return politics;
    }

    public void setPolitics(String politics) {
        this.politics = politics;
    }

    public Float getPopularity() {
        return popularity;
    }

    public void setPopularity(Float popularity) {
        this.popularity = popularity;
    }

    public List<Long> getFeature() {
        return feature;
    }

    public void setFeature(List<Long> feature) {
        this.feature = feature;
    }

    public List<Feature> getNewFeature() {
        return newFeature;
    }

    public void setNewFeature(List<Feature> newFeature) {
        this.newFeature = newFeature;
    }
}
