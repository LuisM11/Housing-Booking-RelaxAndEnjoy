package com.pi.relaxandenjoy.Controller;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Product;
import com.pi.relaxandenjoy.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://?????????/")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Product> search(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.search(id).get());
    }

    @GetMapping
    public ResponseEntity<List<Product>> listAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.listAll());

    }

    @PostMapping
    public ResponseEntity<Product> register(@RequestBody Product product) {
        return ResponseEntity.ok(productService.register(product));
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        productService.delete(id);
        return ResponseEntity.ok("Product with id: " + id + " was removed");
    }
}
