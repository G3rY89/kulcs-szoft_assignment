package com.ks.userservice.controller;

import com.ks.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ks.userservice.model.User;

import java.util.List;

@RestController
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository service){
        this.userRepository = service;
    }

    @CrossOrigin
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/add-user", method = RequestMethod.POST)
    public void addUser(@RequestParam("username") String userName, @RequestParam("emailaddress") String emailAddress ){
        userRepository.save(new User(userName, emailAddress));
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void removeUser(@RequestParam("userid") Long userId){
        userRepository.delete(userId);
    }

}
