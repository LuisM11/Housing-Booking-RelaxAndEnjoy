package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Exceptions.ResourceNotFoundException;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Model.Feature;
import com.pi.relaxandenjoy.Repository.FeatureRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureService {

    private static final Logger LOGGER = Logger.getLogger(CategoryService.class);

    private FeatureRepository featureRepository;

    @Autowired
    public FeatureService(FeatureRepository featureRepository) {
        this.featureRepository = featureRepository;
    }

    public List<Feature> listAll() throws ResourceNotFoundException {
        LOGGER.info("Starting Process: Searching all the features...");
        List<Feature> featureList = featureRepository.findAll();
        if (featureList.size() > 0) {
            return featureList;
        } else {
            throw new ResourceNotFoundException("There are no registered features.");
        }
    }

    public Optional<Feature> search(Long id) throws ResourceNotFoundException {
        Optional<Feature> featureFound = featureRepository.findById(id);
        if (featureFound.isPresent()) {
            return featureFound;
        } else {
            throw new ResourceNotFoundException("The feature with id: " + id + " not found.");
        }
    }

    public List<Feature> create(List<Feature> featureList) {
        LOGGER.info("Creating new features...");
        return featureRepository.saveAll(featureList);
    }
}
