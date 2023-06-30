package com.pi.relaxandenjoy.Controller;


import com.pi.relaxandenjoy.AWSConfig.S3Buckets;
import com.pi.relaxandenjoy.Service.S3Service;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.UUID;

@RestController
@RequestMapping("/s3Imgs")
public class AWSImagesController {
    private S3Service s3Service;
    private S3Buckets s3Buckets;

    public AWSImagesController(S3Service s3Service, S3Buckets s3Buckets) {
        this.s3Service = s3Service;
        this.s3Buckets = s3Buckets;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadImages(@RequestParam( "files")  MultipartFile [] files) throws IOException {
        Arrays.stream(files).forEach(x-> {
            try {
                s3Service.putObject(s3Buckets.getProducts(),"products/IDPRODUCT/%s".formatted(UUID.randomUUID().toString()) ,x.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        return ResponseEntity.ok("yei" );
    }

}
