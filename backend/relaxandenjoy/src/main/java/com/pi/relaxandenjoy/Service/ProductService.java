package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Dtos.ReservationDTO;
import com.pi.relaxandenjoy.Exceptions.NoContentException;
import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.*;
import com.pi.relaxandenjoy.Repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private static final Logger LOGGER = Logger.getLogger(ProductService.class);
    private ProductRepository productRepository;
    private CityService cityService;
    private CategoryService categoryService;


    @Autowired
    public ProductService( ProductRepository productRepository, CityService cityService, CategoryService categoryService) {
        this.productRepository = productRepository;
        this.cityService = cityService;
        this.categoryService = categoryService;
    }

    public Optional<Product> search(Long id) throws ResourceNotFoundException {
        Optional<Product> productFound = productRepository.findById(id);
        if (productFound.isPresent()) {
            return productFound;
        } else {
            throw new ResourceNotFoundException("The product with id: " + id + " not found.");
        }
    }

    public List<Product> searchByCity(Long id) throws ResourceNotFoundException {
       Optional<City > city = cityService.search(id);
        List<Product> productsFound = productRepository.findByCity(city.get());
        if (productsFound.size() > 0) {
            return productsFound;
        } else {
            throw new ResourceNotFoundException("The products filtered by city with id: " + id + " were not found.");
        }
    }

    public List<Product> searchByCategory(Long id) throws ResourceNotFoundException {
        Optional<Category> category = categoryService.search(id);
        List<Product> productsFound = productRepository.findByCategories(category.get());
        if (productsFound.size() > 0) {
            return productsFound;
        } else {
            throw new ResourceNotFoundException("The products filtered by category with id: " + id + " were not found.");
        }
    }

    public List<Product> listAll() throws NoContentException {
        LOGGER.info("Starting Process: Searching all products...");
        List<Product> productList = productRepository.findAll();
        if (productList.size() > 0) {
            return productList;
        } else {
            throw new NoContentException("No products registered.");
        }
    }
    public Set<ReservationDTO> listReservations (Long idProduct) throws NoContentException, ResourceNotFoundException {
        LOGGER.info("Starting process: Searching reservations of product " + idProduct);
        Set<Reservation> reservations = search(idProduct).get().getReservation();
        Set<ReservationDTO >reservationsDto = reservations.stream().map(r -> new ReservationDTO(r.getId(), r.getInitDate(),r.getFinalDate(),r.getInitTime(),null,null,null)).collect(Collectors.toSet());
        if (reservations.size() > 0) {
            return reservationsDto;
        } else {
            throw new NoContentException("No products registered.");
        }
    }

    public void listProductsByRange (LocalDate init,LocalDate end) throws NoContentException {
        List<Product> allProducts = listAll();
        List<Product> res = new ArrayList<>();
        boolean bool = false;
        allProducts.stream().filter(product ->{
            Set<Reservation> reservations = product.getReservation();
            boolean reservationBoolean = reservations.stream().anyMatch(reservation -> {
                LocalDate initR = reservation.getInitDate();
                LocalDate finalR = reservation.getFinalDate();
                if((initR.isAfter(init) || initR.isEqual(init)) && (finalR.isAfter(end) || finalR.isEqual(end))) {
                    return true;
                }
                return  false;
            });
            return !reservationBoolean;

        });

    }

    public Product create(Product product) {
        LOGGER.info("Starting new product registration process: " + product.getTitle());
        return productRepository.save(product);
    }

    public void delete(Long id) throws ResourceNotFoundException {
        Optional<Product> productSearch = productRepository.findById(id);
        if (productSearch.isPresent()) {
            productRepository.deleteById(id);
            LOGGER.warn("Product with id: " + id + " has been removed");
        } else {
            throw new ResourceNotFoundException("Product with id: " + id + " not found.");
        }
    }

//    @Transactional
//    public Product saveParentAndChildren(Product parent) {
//        EntityManager entityManager = entityManagerFactory.createEntityManager();
//        Image img1 = new Image(78L,"prueba1","www",null);
//        Image img2 = new Image(44L,"prueba2","www",null);
//        img1.setProduct(parent); img2.setProduct(parent);
//        Set<Image> imgs = new HashSet<>();
//        imgs.add(img1); imgs.add(img2);
//        parent.setImages(imgs);
//        entityManager.getTransaction().begin();
//        entityManager.merge(parent);
//        entityManager.merge(img2);
//        entityManager.getTransaction().commit();
//        entityManager.close();
//
//
//        entityManager.persist(parent);
//        for (Image child : parent.getImages()) {
//            child.setProduct(parent);
//            entityManager.persist(child);
//        }
//        return parent;
//    }
}