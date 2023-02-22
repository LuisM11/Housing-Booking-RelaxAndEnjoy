package com.pi.relaxandenjoy.Repository;

import com.pi.relaxandenjoy.Model.Product;
import com.pi.relaxandenjoy.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByProduct(Product product);
//    List<Reservation> findByProductIdAndInitDate

}
