package com.pi.relaxandenjoy.Service;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.IOException;
import java.net.URL;

@Service
public class S3Service {
    private static final Logger LOGGER = Logger.getLogger(CategoryService.class);

    @Autowired
    private S3Client s3Client;

    public void putObject(String bucketName , String key , byte[] file){
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();
        s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file));
    }

    public byte[] getObject(  String bucketName ,String key){
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();
        ResponseInputStream<GetObjectResponse> response = s3Client.getObject(getObjectRequest);
        try {
            return response.readAllBytes();

        } catch (IOException e) {
            LOGGER.error("Error downloading the file");
            throw new RuntimeException(e);
        }

    }

    public String getURL( String bucketName, String keyName ) {
        GetUrlRequest request = GetUrlRequest.builder()
                    .bucket(bucketName)
                    .key(keyName)
                    .build();
        URL url = s3Client.utilities().getUrl(request);
        return  url.toString();
    }



}
