package com.pi.relaxandenjoy.Controller;

import com.pi.relaxandenjoy.Service.AWSService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/s3Imgs")
public class AWSImagesController {
    private AWSService awsService;

    public AWSImagesController(AWSService awsService) {
        this.awsService = awsService;
    }

    @PostMapping
    public ResponseEntity<String> uploadImages(@RequestPart(value = "file")MultipartFile file) throws IOException {
        awsService.uploadImage(file);
        return ResponseEntity.ok("yei" + file.getOriginalFilename());

    }

}
