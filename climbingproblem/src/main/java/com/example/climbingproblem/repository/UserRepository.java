package com.example.climbingproblem.repository;

import com.example.climbingproblem.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUsername(String name);

    Boolean existsByUsername(String name);

    Boolean existsByEmail(String email);

}
