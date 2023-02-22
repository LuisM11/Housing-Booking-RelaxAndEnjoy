package com.pi.relaxandenjoy.Service;
import com.pi.relaxandenjoy.Dtos.ReservationDTO;
import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.*;
import com.pi.relaxandenjoy.Repository.ClientRepository;
import com.pi.relaxandenjoy.Repository.ProductRepository;
import com.pi.relaxandenjoy.Repository.ReservationRepository;
import com.pi.relaxandenjoy.Repository.UserRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    private static final Logger LOGGER = Logger.getLogger(ReservationService.class);
    private ReservationRepository reservationRepository;
    private ClientRepository clientRepository;
    private UserRepository userRepository;
    private  CityService cityService;
    private ProductService productService;

    private ProductRepository productRepository;

    public ReservationService(ReservationRepository reservationRepository, ClientRepository clientRepository, UserRepository userRepository, CityService cityService, ProductService productService, ProductRepository productRepository) {
        this.reservationRepository = reservationRepository;
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
        this.cityService = cityService;
        this.productService = productService;
        this.productRepository = productRepository;
    }


    public ReservationDTO create(ReservationDTO reservationDTO) throws ResourceNotFoundException {
        LOGGER.info("Starting new reservation registration process: ");
        Optional<Client> possibleClient = clientRepository.findById(reservationDTO.getUser());
        City city = reservationDTO.getCity() != null ? cityService.search(reservationDTO.getCity()).orElseThrow(()-> new ResourceNotFoundException("City not found")) :  null ;
        Client client;
        if (possibleClient.isEmpty()){
            User user = userRepository.findById(reservationDTO.getUser()).orElseThrow(()-> new ResourceNotFoundException("User not found"));
            client = new Client(user.getId(),user.getName(),user.getSurname(),user.getEmail(), user.getPassword(),city );
            client.setCity(city);
            client.setRole(user.getRole());
            userRepository.delete(user);
            client = clientRepository.save(client);
        }else{
            client = possibleClient.get();
            client.setCity(city);
            client = clientRepository.save(client);
        }
        Product product = productService.search(reservationDTO.getProduct()).orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        Reservation reservation = new Reservation(reservationDTO.getInitDate(),reservationDTO.getFinaltDate(),reservationDTO.getInitTime(),product, client);
       reservation= reservationRepository.save(reservation);

//        System.out.println(productRepository.findByReservationInitDateGreaterThan(LocalDate.of(2023,1,1)));
       return new ReservationDTO(reservation.getId(), reservation.getInitDate(),reservation.getFinalDate(),reservation.getInitTime(),reservation.getProduct().getId(),reservation.getClient().getId(),null);
    }
    public List<Reservation> searchByProduct(Long idProduct) throws ResourceNotFoundException {
        Optional<Product> product = productService.search(idProduct);
        List<Reservation> reservations = reservationRepository.findByProduct(product.get());
        if (reservations.size() > 0) {
            return reservations;
        } else {
            throw new ResourceNotFoundException("The reservations filtered by product with id: " + idProduct + " were not found.");
        }
    }

//    private Reservation reservationDTOtoReservation(ReservationDTO reservationDTO){
//        Reservation reservation = new Reservation();
//        reservation.setName(reservationDTO.getName());
//        reservation.setSurname(reservationDTO.getSurname());
//        reservation.setEmail(reservationDTO.getEmail());
//        reservation.setPassword(encoder.encode( reservationDTO.getPassword()));
//        City city = new City();
////        city.setId(reservationDTO.getCity());
////        reservation.setCity(city);
//        Role role = new Role(2L,null,null);
//        reservation.setRole(role);
//        return reservation;
//    }
//    private ReservationDTO ReservationtoReservationDTO(Reservation reservation){
//        System.out.println("reservation id" + reservation.getId());
//        ReservationDTO reservationDTO = new ReservationDTO();
//        reservationDTO.setId(reservation.getId());
//        reservationDTO.setName(reservation.getName());
//        reservationDTO.setSurname(reservation.getSurname());
//        reservationDTO.setEmail(reservation.getEmail());
//        reservationDTO.setPassword(reservation.getPassword());
////        reservationDTO.setCity(reservation.getCity().getId());
//        return reservationDTO;
//    }


}

