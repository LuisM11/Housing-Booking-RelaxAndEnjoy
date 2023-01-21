package com.pi.relaxandenjoy.service;

import com.pi.relaxandenjoy.model.Category;
import com.pi.relaxandenjoy.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    public Category addCategory(Category category){
        return categoryRepository.save(category);
    }
    public Optional<Category> searchCategory(Integer id){
        return categoryRepository.findById(id);
    }
    public Category updateCategory(Category category){
        return categoryRepository.save(category);
    }
    public void deleteCategory(Integer id){
        categoryRepository.deleteById(id);
    }
    public List<Category> listCategories(){
        return categoryRepository.findAll();
    }
}
