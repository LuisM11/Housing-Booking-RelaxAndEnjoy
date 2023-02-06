package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Model.Product;
import com.pi.relaxandenjoy.Repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private static final Logger LOGGER = Logger.getLogger(ProductService.class);
    private ProductRepository productRepository;
    private CityService cityService;
    private CategoryService categoryService;

    @Autowired
    public ProductService(ProductRepository productRepository, CityService cityService, CategoryService categoryService) {
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

    public List<Product> listAll() throws ResourceNotFoundException {
        LOGGER.info("Starting Process: Searching all products...");
        List<Product> productList = productRepository.findAll();
        if (productList.size() > 0) {
            return productList;
        } else {
            throw new ResourceNotFoundException("No products registered.");
        }
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
}