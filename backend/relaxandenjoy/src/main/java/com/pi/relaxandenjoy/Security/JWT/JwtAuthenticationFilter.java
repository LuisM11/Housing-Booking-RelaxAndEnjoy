package com.pi.relaxandenjoy.Security.JWT;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi.relaxandenjoy.Dtos.LoginDTO;
import com.pi.relaxandenjoy.Repository.UserRepository;
import com.pi.relaxandenjoy.Security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.Collections;



public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        LoginDTO authCredentials;

        try{
            authCredentials = new ObjectMapper().readValue(request.getReader(), LoginDTO.class);

        } catch (StreamReadException e) {
            throw new RuntimeException(e);
        } catch (DatabindException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        UsernamePasswordAuthenticationToken upat = new UsernamePasswordAuthenticationToken(authCredentials.getEmail(),authCredentials.getPassword(), Collections.emptyList());
        return getAuthenticationManager().authenticate(upat);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        UserDetails userDetails = (UserDetails) authResult.getPrincipal();
        System.out.println(userDetails);
        System.out.println(userDetails.getAuthorities().getClass());
        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
        Collection<GrantedAuthority> grantedAuthorities = (Collection<GrantedAuthority>) authorities;
        String role = ((SimpleGrantedAuthority)(authorities.toArray()[0])).getAuthority();
        String token = JwtTokenProvider.generateToken(userDetails.getUsername(),userDetails.getUsername(),role);
        response.addHeader("Authorization","Bearer " + token);
        response.setStatus(200);
        PrintWriter out = response.getWriter();
        out.print("Usuario autenticado correctamente");
        out.close();
        response.getWriter().flush();
    }
}
