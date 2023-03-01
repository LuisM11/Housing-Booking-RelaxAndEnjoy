package com.pi.relaxandenjoy.Security.JWT;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi.relaxandenjoy.Dtos.LoginDTO;
import com.pi.relaxandenjoy.Dtos.LoginResponseDTO;
import com.pi.relaxandenjoy.Security.SecurityUser;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
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
//        UserDetailsImpl u = new UserDetailsImpl();


        UsernamePasswordAuthenticationToken upat = new UsernamePasswordAuthenticationToken(authCredentials.getEmail(),authCredentials.getPassword(), Collections.emptyList());
        return getAuthenticationManager().authenticate(upat);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityUser userDetails = (SecurityUser) authResult.getPrincipal();
        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
        Collection<GrantedAuthority> grantedAuthorities = (Collection<GrantedAuthority>) authorities;
        String role = ((SimpleGrantedAuthority)(authorities.toArray()[0])).getAuthority();
        String token = JwtTokenProvider.generateToken(userDetails.getUsername(),userDetails.getUsername(),role);
        response.addHeader("Authorization","Bearer " + token);
        response.addHeader("Access-Control-Expose-Headers", "Authorization");
        response.setStatus(200);
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(userResponse(userDetails));
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
//        PrintWriter out = response.getWriter();
//        out.print("Usuario autenticado correctamente" + userDetails.getCompleteName());
//        out.close();
//        response.getWriter().flush();
    }


    private LoginResponseDTO userResponse(SecurityUser user){
        return new LoginResponseDTO(user.getId(),user.getCompleteName(),user.getUsername(), user.getRole());
    }
}
