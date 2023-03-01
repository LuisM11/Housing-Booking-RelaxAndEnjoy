package com.pi.relaxandenjoy.Service;

import com.pi.relaxandenjoy.Dtos.SignUpDTO;
import com.pi.relaxandenjoy.Model.City;
import com.pi.relaxandenjoy.Model.Role;
import com.pi.relaxandenjoy.Model.User;
import com.pi.relaxandenjoy.Repository.UserRepository;
import org.apache.log4j.Logger;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class UserService {
    private static final Logger LOGGER = Logger.getLogger(ProductService.class);
    private UserRepository userRepository;
    private PasswordEncoder encoder;

    public UserService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public SignUpDTO create(SignUpDTO userDTO){
        LOGGER.info("Starting new user registration process: " + userDTO.getEmail());
        return UsertoUserDTO( userRepository.save(userDTOtoUser(userDTO)));
    }
    public User search(Long id){
        LOGGER.info("Starting new user search process: " );
        return userRepository.findById(id).get();
    }

    private User userDTOtoUser(SignUpDTO signUpDTO){
        User user = new User();
        user.setName(signUpDTO.getName());
        user.setSurname(signUpDTO.getSurname());
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(encoder.encode( signUpDTO.getPassword()));
        City city = new City();
//        city.setId(signUpDTO.getCity());
//        user.setCity(city);
        Role role = new Role(2L,null,null);
        user.setRole(role);
        return user;
    }
    private SignUpDTO UsertoUserDTO(User user){
        System.out.println("user id" + user.getId());
        SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setId(user.getId());
        signUpDTO.setName(user.getName());
        signUpDTO.setSurname(user.getSurname());
        signUpDTO.setEmail(user.getEmail());
        signUpDTO.setPassword(user.getPassword());
//        signUpDTO.setCity(user.getCity().getId());
        return signUpDTO;
    }


}
