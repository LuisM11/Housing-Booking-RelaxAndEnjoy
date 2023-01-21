package com.pi.relaxandenjoy.controller;

import com.pi.relaxandenjoy.model.Category;
import com.pi.relaxandenjoy.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> allCategorias(){
        return ResponseEntity.ok(categoryService.listCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> searchCategory(@PathVariable Integer id) {
        Optional<Category> categorySearched = categoryService.searchCategory(id);
        if(categorySearched.isPresent()) {
            return ResponseEntity.ok(categorySearched.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.addCategory(category));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCategoy(@RequestBody Category category){
        Optional<Category> categorySearched = categoryService.searchCategory(category.getId());
        if(categorySearched.isPresent()){
            return ResponseEntity.ok(categoryService.updateCategory(category));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category for ID " + category.getId() +
                    " not found");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Integer id){
        if(categoryService.searchCategory(id).isPresent()){
            categoryService.deleteCategory(id);
            return ResponseEntity.ok("Delete successfully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category with ID: " + id + "not found");
    }
}