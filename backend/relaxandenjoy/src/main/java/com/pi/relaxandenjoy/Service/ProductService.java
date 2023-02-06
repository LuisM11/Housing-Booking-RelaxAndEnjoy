package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
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

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> search(Long id) throws ResourceNotFoundException {
        Optional<Product> productFound = productRepository.findById(id);
        if (productFound.isPresent()) {
            return productFound;
        } else {
            throw new ResourceNotFoundException("The product with id: " + id + " not found.");
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

    public Product register(Product product) {
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