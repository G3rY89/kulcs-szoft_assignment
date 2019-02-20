package com.ks.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ks.userservice.model.User;

import java.util.ArrayList;

public interface UserRepository extends JpaRepository<User, Long> {

}
