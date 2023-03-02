package com.pi.relaxandenjoy.Service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@Service
public class AWSService {
    @Autowired
    private AmazonS3 s3Client;

    @Autowired
    private String bucketName;

    public void uploadImage(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        byte[] imageBytes = file.getBytes();

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(file.getContentType());
        metadata.setContentLength(imageBytes.length);

        PutObjectRequest request = new PutObjectRequest(bucketName, fileName, new ByteArrayInputStream(imageBytes), metadata);

        s3Client.putObject(request);
    }

}
