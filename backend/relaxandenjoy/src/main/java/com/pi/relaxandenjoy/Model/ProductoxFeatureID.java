//package com.pi.relaxandenjoy.Model;
//
//import javax.persistence.Column;
//import javax.persistence.Embeddable;
//import java.io.Serializable;
//import java.util.Objects;
//
//@Embeddable
//public class ProductoxFeatureID implements Serializable {
//    @Column(name = "id_products")
//    private Long idProduct;
//    @Column(name = "id_features")
//    private Long idFeature;
//
//    public ProductoxFeatureID(Long idProduct, Long idFeature) {
//        this.idProduct = idProduct;
//        this.idFeature = idFeature;
//    }
//
//    public ProductoxFeatureID() {
//
//    }
//
//    public Long getIdProduct() {
//        return idProduct;
//    }
//
//    public void setIdProduct(Long idProduct) {
//        this.idProduct = idProduct;
//    }
//
//    public Long getIdFeature() {
//        return idFeature;
//    }
//
//    public void setIdFeature(Long idFeature) {
//        this.idFeature = idFeature;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        ProductoxFeatureID that = (ProductoxFeatureID) o;
//        return Objects.equals(idProduct, that.idProduct) && Objects.equals(idFeature, that.idFeature);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(idProduct, idFeature);
//    }
//}
