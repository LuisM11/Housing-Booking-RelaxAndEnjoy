package com.pi.relaxandenjoy.Controller;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/categories")
@CrossOrigin("http://127.0.0.1:5173/")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<List<Category>> listAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.listAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> search(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.search(id).get());
    }

    @PostMapping
    public ResponseEntity<Category> registrar(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.registrar(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws ResourceNotFoundException {
        categoryService.eliminar(id);
        return ResponseEntity.ok("Category with id: " + id + " was removed");
    }
}

