package com.pi.relaxandenjoy.Security;

import com.pi.relaxandenjoy.Security.JWT.JwtAuthenticationEntryPoint;
import com.pi.relaxandenjoy.Security.JWT.JwtAuthenticationFilter;
import com.pi.relaxandenjoy.Security.JWT.JwtAuthorizationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig  {
    private UserDetailsImpl userDetails;
    private JwtAuthorizationFilter jwtAuthorizationFilter;
    private JwtAuthenticationEntryPoint entryPoint;

    public WebSecurityConfig(UserDetailsImpl userDetails, JwtAuthorizationFilter jwtAuthorizationFilter, JwtAuthenticationEntryPoint entryPoint) {
        this.userDetails = userDetails;
        this.jwtAuthorizationFilter = jwtAuthorizationFilter;
        this.entryPoint = entryPoint;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authenticationManager) throws Exception {
        JwtAuthenticationFilter authenticationFilter = new JwtAuthenticationFilter();
        authenticationFilter.setAuthenticationManager(authenticationManager);
        authenticationFilter.setFilterProcessesUrl("/auth/login");
        return http
                .csrf(csrf -> csrf.disable())
                .cors().
                and()
                .exceptionHandling(e -> e.authenticationEntryPoint(entryPoint))
                .authorizeHttpRequests((authz) -> authz
                        .mvcMatchers(HttpMethod.GET,"/products/**","/cities/**","/categories/**").permitAll()
                        .mvcMatchers(HttpMethod.POST,"/auth/signup").permitAll()
                        .mvcMatchers("/reservations").hasAnyRole("ADMIN","SCHEDULER")
                        .antMatchers("/s3Imgs").permitAll()
                        .anyRequest().authenticated()
                )
//                .userDetailsService(userDetails)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .httpBasic(Customizer.withDefaults())
                .addFilter(authenticationFilter)
                .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    @Bean
    public AuthenticationManager authenticationManager( HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetails)
                .passwordEncoder(passwordEncoder())
                .and().build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://127.0.0.1:5173","http://frontend-r-y-d.s3-website.us-east-2.amazonaws.com", "http://localhost:5173/"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
