package com.example.loginadmindashboard.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.loginadmindashboard.service.UserService;
import com.example.loginadmindashboard.model.User;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");
        logger.info("Login attempt: username={}, password={}", username, password);
        User user = userService.findByUsername(username);
        logger.info("User from DB: {}", user);
        if (user != null && user.getPassword().equals(password) && "admin".equals(user.getRole())) {
            logger.info("Login successful for user: {}", username);
            return ResponseEntity.ok(Map.of("success", true, "role", "admin"));
        }
        logger.warn("Login failed for user: {}", username);
        return ResponseEntity.status(401).body(Map.of("success", false, "message", "Invalid credentials"));
    }
}
