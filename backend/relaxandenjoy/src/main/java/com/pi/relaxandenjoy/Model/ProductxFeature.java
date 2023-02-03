//package com.pi.relaxandenjoy.Model;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
////@JsonIgnoreProperties({"product","feature"})
//@Entity
//@Table(name = "products_has_features")
//public class ProductxFeature {
//
//    @EmbeddedId
//    private ProductoxFeatureID id;
//
//    @JsonIgnore
//    @MapsId("idProduct")
//    @ManyToOne
//    @JoinColumn(name = "id_products", referencedColumnName = "id_products", updatable = false, insertable = false)
//    private Product product;
//
//
//
//    @MapsId("idFeature")
//    @ManyToOne
//    @JoinColumn(name = "id_features", referencedColumnName = "id_features", updatable = false, insertable = false)
//    private Feature feature;
//
//    public ProductxFeature() {
//    }
//
//    public ProductxFeature(Product product, Feature feature) {
//        this.product = product;
//        this.feature = feature;
//    }
//
//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }
//
//    public Feature getFeature() {
//        return feature;
//    }
//
//    public void setFeature(Feature feature) {
//        this.feature = feature;
//    }
//}
