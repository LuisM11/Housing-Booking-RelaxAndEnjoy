package com.pi.relaxandenjoy.Repository;

import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategories (Category category);
    Set<Product> findByCity (City city);

    @Query("SELECT p FROM Product p WHERE p.id NOT IN (SELECT r.product.id FROM Reservation r WHERE (:init <= r.finalDate) AND (r.initDate <= :end))")
    Set<Product> findByDateRange (@Param("init") LocalDate init, @Param("end") LocalDate end);
    @Query("SELECT p FROM Product p WHERE p.city.id = :city AND p.id NOT IN (SELECT r.product.id FROM Reservation r WHERE (:init <= r.finalDate) AND (r.initDate <= :end)) ")
    Set<Product> findByDateRangeAndCity (@Param("city") Long cityId,@Param("init") LocalDate init, @Param("end") LocalDate end);


}
