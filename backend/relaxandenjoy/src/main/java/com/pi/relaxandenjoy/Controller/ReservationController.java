package com.pi.relaxandenjoy.Controller;

import com.pi.relaxandenjoy.Dtos.ReservationDTO;
import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Service.ReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    private ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping
    public ResponseEntity<ReservationDTO> registrar(@RequestBody ReservationDTO reservationDTO, @RequestHeader("Authorization") String token) throws ResourceNotFoundException {
//        System.out.println(token);
        return new ResponseEntity<>(reservationService.create(reservationDTO), HttpStatus.CREATED);

    }

}
