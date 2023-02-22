package com.pi.relaxandenjoy.Security;

import com.pi.relaxandenjoy.Model.User;
import com.pi.relaxandenjoy.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImpl implements UserDetailsService {
    private UserRepository userRepository;

    public UserDetailsImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Impossible to authenticate, user not found"));
        return new SecurityUser(user);
//        GrantedAuthority grant = new SimpleGrantedAuthority(user.getRole().getName());
//        System.out.println("userrrrDEtails");
//        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(), Collections.singleton(grant));
    }
}
