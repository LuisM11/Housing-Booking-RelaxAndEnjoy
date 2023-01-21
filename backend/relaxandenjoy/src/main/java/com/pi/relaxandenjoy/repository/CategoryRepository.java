package com.pi.relaxandenjoy.repository;

import com.pi.relaxandenjoy.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
