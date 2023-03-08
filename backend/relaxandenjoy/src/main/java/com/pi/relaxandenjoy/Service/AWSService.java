package com.pi.relaxandenjoy.Service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.pi.relaxandenjoy.Model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AWSService {
    @Autowired
    private AmazonS3 s3Client;

    @Autowired
    private String bucketName;

    public List<Image> uploadImages(MultipartFile[] files) throws IOException {
        List<Image> urls = new ArrayList<>();
        for (MultipartFile file : files){
            Image img = new Image();
            String fileName = file.getOriginalFilename(); //StringUtils.cleanpath
            String fileKey = UUID.randomUUID().toString() + fileName ;
            byte[] imageBytes = file.getBytes();

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(imageBytes.length);
            PutObjectRequest request = new PutObjectRequest(bucketName, fileKey, new ByteArrayInputStream(imageBytes), metadata);
            s3Client.putObject(request);
            img.setUrl(s3Client.getUrl(bucketName,fileKey).toString());
            img.setTitle(fileName);
            urls.add(img);
        }
//        urls.forEach(System.out::println);
        return urls;



    }

}
