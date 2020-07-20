package com.example.climbingproblem.controller;


import com.example.climbingproblem.model.User;
import com.example.climbingproblem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {
    @Autowired
    private UserService service;

    @GetMapping("/api/users")
    public Iterable<User> list() {
        return service.listAll();
    }

}
