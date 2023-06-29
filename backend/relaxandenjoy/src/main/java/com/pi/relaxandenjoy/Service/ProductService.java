package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Dtos.ProductDTO;
import com.pi.relaxandenjoy.Dtos.ReservationDTO;
import com.pi.relaxandenjoy.Exceptions.BadRequestException;
import com.pi.relaxandenjoy.Exceptions.NoContentException;
import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.*;
import com.pi.relaxandenjoy.Repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private static final Logger LOGGER = Logger.getLogger(ProductService.class);
    private ProductRepository productRepository;
    private CityService cityService;
    private CategoryService categoryService;

    private FeatureService featureService;
    private S3Service s3Service;



    @Autowired
    public ProductService(ProductRepository productRepository, CityService cityService, CategoryService categoryService, FeatureService featureService, S3Service s3Service) {
        this.productRepository = productRepository;
        this.cityService = cityService;
        this.categoryService = categoryService;
        this.featureService = featureService;
        this.s3Service = s3Service;
    }

    public Optional<Product> search(Long id) throws ResourceNotFoundException {
        Optional<Product> productFound = productRepository.findById(id);
        if (productFound.isPresent()) {
            return productFound;
        } else {
            throw new ResourceNotFoundException("The product with id: " + id + " not found.");
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

    public Set<Product> getProducts(LocalDate init,LocalDate end,Long cityId) throws ResourceNotFoundException, NoContentException, BadRequestException {
        if( init != null && end != null &&  cityId != null){
            return searchProductsByRangeAndCity(cityId,init,end);
        }
        else if(init == null && end == null && cityId != null ){
            return searchByCity(cityId);
        }
        else if(init != null && end != null){ //
            return searchProductsByRange(init,end);
        }
        else if(init != null  ||  end != null ){
            throw  new BadRequestException("Date range is incomplete to do search");
        }else{
            return listAll();
        }
    }

    public Set<Product> listAll() throws NoContentException {
        LOGGER.info("Starting Process: Searching all products...");
        Set<Product> productList = new HashSet<>(  productRepository.findAll());
        if (productList.size() > 0) {
            return productList;
        } else {
            throw new NoContentException("No products registered.");
        }
    }

    public Set<Product> searchByCity(Long id) throws ResourceNotFoundException, NoContentException {
        Optional<City > city = cityService.search(id);
        Set<Product> productsFound = productRepository.findByCity(city.get());
        if (productsFound.size() > 0) {
            return productsFound;
        } else {
            throw new NoContentException("The products filtered by city with id: " + id + " were not found.");
        }
    }
    public Set<Product> searchProductsByRange (LocalDate init,LocalDate end) throws NoContentException {
        Set<Product> result = productRepository.findByDateRange(init,end);
        if(result.isEmpty()){
            throw new NoContentException("No products in the specified dates range");
        }
        return result ;
    }public Set<Product> searchProductsByRangeAndCity (Long cityId, LocalDate init,LocalDate end) throws NoContentException, ResourceNotFoundException {
        cityService.search(cityId);
        Set<Product> result = productRepository.findByDateRangeAndCity(cityId,init,end);
        if(result.isEmpty()){
            throw new NoContentException("No products in the specified dates range and city");
        }
        return result ;
    }

    public Set<ReservationDTO> listReservations (Long idProduct) throws NoContentException, ResourceNotFoundException {
        LOGGER.info("Starting process: Searching reservations of product " + idProduct);
        Set<Reservation> reservations = search(idProduct).get().getReservation();
        Set<ReservationDTO >reservationsDto = reservations.stream().map(r -> new ReservationDTO(r.getId(), r.getInitDate(),r.getFinalDate(),r.getInitTime(),null,null,null)).collect(Collectors.toSet());
        if (reservations.size() > 0) {
            return reservationsDto;
        } else {
            throw new NoContentException("No reservations registered for product with id" + idProduct);
        }
    }

    @Transactional
    public Product create(ProductDTO productDTO, MultipartFile [] files) throws ResourceNotFoundException, IOException {
        LOGGER.info("Starting new product registration process: " + productDTO.getName());
        City city = cityService.search(productDTO.getCity()).get();
        Category category = categoryService.search(productDTO.getCategory()).get();
        Set<Feature> setFeatures = productDTO.getFeature().stream().map(idfeature-> {
            Feature newFeature = null;
            try {
                newFeature = featureService.search(idfeature).get();
            } catch (ResourceNotFoundException e) {
                LOGGER.warn("error, feature does not exist");
            }
            return newFeature;
        }).collect(Collectors.toSet());
        Set<Feature> featureSet = new HashSet<>();
        if (productDTO.getNewFeature() != null && !productDTO.getNewFeature().isEmpty()){
            featureSet = featureService.create(productDTO.getNewFeature()).stream().collect(Collectors.toSet());

        }
        setFeatures.addAll(featureSet);
//        List<Image> images = awsService.uploadImages(files);
        Product responseProduct = productRepository.save(new Product(productDTO.getTitle(),productDTO.getName(),productDTO.getPopularity(),
               " images.get(0).getUrl()",productDTO.getAddress(),productDTO.getRules(),productDTO.getHealthAndSafety(),productDTO.getPolitics(),
                productDTO.getLocation(),productDTO.getDescription(),category, city,setFeatures,new HashSet<>(),null));

        return  responseProduct;
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

    public void update(Product product){
        productRepository.save(product);
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