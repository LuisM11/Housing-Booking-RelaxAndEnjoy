package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Repository.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private static final Logger LOGGER = Logger.getLogger(CategoryService.class);
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Optional<Category> search(Long id) throws ResourceNotFoundException {
        Optional<Category> categoryFound = categoryRepository.findById(id);
        if (categoryFound.isPresent()) {
            return categoryFound;
        } else {
            throw new ResourceNotFoundException("The category with id: " + id + ", not found.");
        }
    }

    public List<Category> listAll() throws ResourceNotFoundException {
        LOGGER.info("Iniciando Proceso: Buscando todas las categorias.");
        List<Category> categoryList = categoryRepository.findAll();
        if (categoryList.size() > 0) {
            return categoryList;
        } else {
            throw new ResourceNotFoundException("There are no registered categories.");
        }
    }

    public Category registrar(Category category) {
        LOGGER.info("Iniciando proceso de registro de nueva categoria: " + category.getTitle());
        return categoryRepository.save(category);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Optional<Category> odontologoBuscado = categoryRepository.findById(id);
        if (odontologoBuscado.isPresent()) {
            categoryRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado la categoria con id: " + id);
        } else {
            throw new ResourceNotFoundException("La categoria con id: " + id + ", no fue encontrado.");
        }
    }

}
