package com.example.climbingproblem.repository;

import com.example.climbingproblem.model.ERole;
import com.example.climbingproblem.model.Role;
import com.example.climbingproblem.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RoleRepository extends CrudRepository<User, Long> {

    Optional<Role> findByName(ERole name);

}
