package com.pi.relaxandenjoy.Controller;


import com.pi.relaxandenjoy.Service.S3Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/s3Imgs")
public class AWSImagesController {
    private S3Service s3Service;

    public AWSImagesController(S3Service s3Service) {
        this.s3Service = s3Service;
    }

//    @PostMapping
//    public ResponseEntity<String> uploadImages(@RequestPart(value = "files")  MultipartFile [] files) throws IOException {
//        awsService.uploadImages(files);
//        return ResponseEntity.ok("yei" );
//    }

}
