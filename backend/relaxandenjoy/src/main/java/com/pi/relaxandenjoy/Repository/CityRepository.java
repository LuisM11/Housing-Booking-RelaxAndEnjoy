package com.pi.relaxandenjoy.Repository;

import com.pi.relaxandenjoy.Model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CityRepository extends JpaRepository<City,Long> {
}
