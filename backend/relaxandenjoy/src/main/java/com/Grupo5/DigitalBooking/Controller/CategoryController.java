package com.Grupo5.DigitalBooking.Controller;

import com.Grupo5.DigitalBooking.Entity.Category;
import com.Grupo5.DigitalBooking.Exceptions.ResourceNotFoundException;
import com.Grupo5.DigitalBooking.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Categorys")
@CrossOrigin("http://127.0.0.1:5173/")
public class CategoryController {
    private CategoryService categoryService;
    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @GetMapping
    public ResponseEntity<List<Category>> list() throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.list());
    }
    @GetMapping("/buscar/id/{id}")
    public ResponseEntity<Category> search(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.search(id).get());
    }

    @PostMapping
    public ResponseEntity<Category> registrar(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.registrar(category));
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws ResourceNotFoundException {
        categoryService.eliminar(id);
        return ResponseEntity.ok("Se elimino el odontologo con id: " + id);
    }
}
