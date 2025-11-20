package com.academico.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // libera swagger
                        .requestMatchers(
                                "/v3/api-docs/**",
                                "/swagger-ui/**",
                                "/swagger-ui.html"
                        ).permitAll()

                        // libera actuator
                        .requestMatchers("/actuator/**").permitAll()

                        // exemplo: rotas públicas
                        .requestMatchers("/public/**").permitAll()

                        // exemplo de rotas por role
                        .requestMatchers("/admin/**").hasRole("admin")
                        .requestMatchers("/aluno/**").hasRole("aluno")

                        // qualquer outra rota precisa estar autenticada via KEYCLOAK
                        .anyRequest().authenticated()
                )
                // ativa JWT do Keycloak
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));

        return http.build();
    }
}
