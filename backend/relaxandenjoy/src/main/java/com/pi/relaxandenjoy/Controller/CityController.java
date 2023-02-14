package com.pi.relaxandenjoy.Controller;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Service.CategoryService;
import com.pi.relaxandenjoy.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cities")
@CrossOrigin("*")
public class CityController {
    private CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public ResponseEntity<List<City>> listAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(cityService.listAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<City> search(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(cityService.search(id).get());
    }

    @PostMapping
    public ResponseEntity<City> create(@RequestBody City city) {
        return ResponseEntity.ok(cityService.create(city));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws ResourceNotFoundException {
        cityService.delete(id);
        return ResponseEntity.ok("City with id: " + id + " was removed");
    }

}
