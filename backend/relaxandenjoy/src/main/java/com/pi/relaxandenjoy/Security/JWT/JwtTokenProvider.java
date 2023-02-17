package com.pi.relaxandenjoy.Security.JWT;

import com.pi.relaxandenjoy.Exceptions.BadRequestException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import java.util.*;

@Component
public class JwtTokenProvider {

    private static String jwtSecret = "JWTSecretKeyForSecuringMyApiInSpringBoot";
    private static  Long jwtExpiration = 604800000L;


    public  JwtTokenProvider() {

    }

    public static String generateToken(String name, String email, String role){
        Date expirationDate = new Date(new Date().getTime() + jwtExpiration);
        Map<String, Object> extraInfo= new HashMap<>();
        extraInfo.put("name",name);
        extraInfo.put("role",role);

        return Jwts.builder()
                .setSubject(email)
                .setExpiration(expirationDate)
                .setClaims(extraInfo)
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .compact();

    }
    public static UsernamePasswordAuthenticationToken getAuthentication(String token){
        try{
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(jwtSecret.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            String email = claims.getSubject();
            GrantedAuthority role = new SimpleGrantedAuthority((String) claims.get("role"));
//            GrantedAuthority grant = new SimpleGrantedAuthority("ROLE_ADMIN");
//            System.out.println(Collections.singleton(grant));
//            Set<GrantedAuthority> roles = claims.get("role",Set.class);
            return  new UsernamePasswordAuthenticationToken(email,null,Collections.singleton(role));
        } catch (JwtException e){
            return null;
        }

    }

}
