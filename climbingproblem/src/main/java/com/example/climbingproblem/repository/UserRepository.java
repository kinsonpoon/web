package com.example.climbingproblem.repository;

import com.example.climbingproblem.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByName(String name);
    User findByPhoneNumber(String phonenumber);

}
