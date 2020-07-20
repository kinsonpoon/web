package com.example.climbingproblem.service;

import com.example.climbingproblem.model.User;


import com.example.climbingproblem.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public Iterable<User> listAll(){
        Iterable<User> users=userRepository.findAll();
        return users;
    }
    public void save(User user) {
        userRepository.save(user);
    }


}
