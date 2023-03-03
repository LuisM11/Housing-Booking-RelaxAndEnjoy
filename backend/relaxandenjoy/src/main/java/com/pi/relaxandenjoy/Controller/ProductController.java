package com.pi.relaxandenjoy.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.pi.relaxandenjoy.Dtos.ProductDTO;
import com.pi.relaxandenjoy.Dtos.ReservationDTO;
import com.pi.relaxandenjoy.Exceptions.BadRequestException;
import com.pi.relaxandenjoy.Exceptions.NoContentException;
import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Image;
import com.pi.relaxandenjoy.Model.Product;
import com.pi.relaxandenjoy.Model.Reservation;
import com.pi.relaxandenjoy.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> searchById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.search(id).get());
    }
    @GetMapping
    public ResponseEntity<Set<Product>> getProducts(
            @RequestParam(value = "init",required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate init,
            @RequestParam(value = "end",required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end,
            @RequestParam(value = "city",required = false)  Long cityId) throws NoContentException, BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(productService.getProducts(init, end, cityId));
    }


    @JsonView(ReservationDTO.JustDateTime.class)
    @GetMapping("/{idProduct}/reservation")
    public ResponseEntity<Set<ReservationDTO>> listReservations(@PathVariable Long idProduct) throws ResourceNotFoundException, NoContentException {
        return ResponseEntity.ok(productService.listReservations(idProduct));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> searchByCategory(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.searchByCategory(id));
    }

    @PostMapping
    public ResponseEntity<?> register(@RequestBody ProductDTO product) {
        return ResponseEntity.ok(productService.create(product));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        productService.delete(id);
        return ResponseEntity.ok("Product with id: " + id + " was removed");
    }
}
