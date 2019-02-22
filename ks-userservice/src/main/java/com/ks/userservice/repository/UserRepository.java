package com.ks.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ks.userservice.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
