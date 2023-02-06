package com.pi.relaxandenjoy.Repository;

import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategories (Category category);
    List<Product> findByCity (City city);
}
