package com.Grupo5.DigitalBooking.Repository;

import com.Grupo5.DigitalBooking.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
