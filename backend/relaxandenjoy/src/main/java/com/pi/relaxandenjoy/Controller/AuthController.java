package com.pi.relaxandenjoy.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.pi.relaxandenjoy.Dtos.LoginDTO;
import com.pi.relaxandenjoy.Dtos.SignUpDTO;
import com.pi.relaxandenjoy.Security.JWT.JwtTokenProvider;
import com.pi.relaxandenjoy.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin()
public class AuthController {

    private UserService userService;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;

    public AuthController(UserService userService, AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }


    @PostMapping("/signup")
    @JsonView(SignUpDTO.withoutPassword.class)
    public ResponseEntity<SignUpDTO> SignUp (@RequestBody @Valid SignUpDTO signUpDTO, BindingResult result){

//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signUpDTO.getEmail(), signUpDTO.getPassword()));
//        System.out.println("a");
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String token = jwtTokenProvider.generateToken(authentication);
//        System.out.println("aaa");
        SignUpDTO r = userService.create(signUpDTO);
            return new ResponseEntity<>(r, HttpStatus.CREATED);
    }

}
