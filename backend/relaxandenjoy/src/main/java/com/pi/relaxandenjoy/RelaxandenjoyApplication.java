package com.pi.relaxandenjoy;

import com.pi.relaxandenjoy.AWSConfig.S3Buckets;
import com.pi.relaxandenjoy.Service.S3Service;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RelaxandenjoyApplication {
	public static void main(String[] args) {
		SpringApplication.run(RelaxandenjoyApplication.class, args);
	}

}

//	@Bean
//	CommandLineRunner runner (S3Service s3Service, S3Buckets s3Buckets){
//		return args -> {
//			s3Service.putObject(s3Buckets.getProducts() , "foo/hola","Hello World!!!".getBytes());
//			byte[] obj = s3Service.getObject(s3Buckets.getProducts() ,"foo/hola");
//			System.out.println("siiiiu" + new String(obj));
//		};
//	}