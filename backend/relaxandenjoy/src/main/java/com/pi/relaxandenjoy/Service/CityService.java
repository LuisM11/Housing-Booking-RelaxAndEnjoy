package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.Category;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Repository.CategoryRepository;
import com.pi.relaxandenjoy.Repository.CityRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {
    private static final Logger LOGGER = Logger.getLogger(CategoryService.class);
    private CityRepository cityRepository;

    @Autowired
    public CityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public Optional<City> search(Long id) throws ResourceNotFoundException {
        Optional<City> cityFound = cityRepository.findById(id);
        if (cityFound.isPresent()) {
            return cityFound;
        } else {
            throw new ResourceNotFoundException("The city with id: " + id + " not found.");
        }
    }

    public List<City> listAll() throws ResourceNotFoundException {
        LOGGER.info("Starting Process: Searching all the cities...");
        List<City> cityList = cityRepository.findAll();
        if (cityList.size() > 0) {
            return cityList;
        } else {
            throw new ResourceNotFoundException("There are no registered cities.");
        }
    }

    public City create(City city) {
        LOGGER.info("Starting process: creating new city..." + city.getName());
        return cityRepository.save(city);
    }

    public void delete(Long id) throws ResourceNotFoundException {
        Optional<City> cityFound = cityRepository.findById(id);
        if (cityFound.isPresent()) {
            cityRepository.deleteById(id);
            LOGGER.warn("City with id: " + id + " has been removed");
        } else {
            throw new ResourceNotFoundException("City with id: " + id + " not found.");
        }
    }
}
