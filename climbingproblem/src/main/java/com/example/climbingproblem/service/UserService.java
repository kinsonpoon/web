package com.example.climbingproblem.service;

import com.example.climbingproblem.model.User;


import com.example.climbingproblem.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    public User loadUserByUsername(String name) {
        User user = userRepository.findByName(name);
        if (user == null) {
            throw new UsernameNotFoundException(name);
        }
        return user;
    }


}
