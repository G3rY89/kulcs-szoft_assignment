package com.ks.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebController {


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String renderIndex(){
        return "index";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String registerUser(){
        return "registration";
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public String showAllUsers(){
        return "users";
    }

    @RequestMapping(value = "/storeuser", method = RequestMethod.POST)
    public String storeUser(@RequestParam("name")String name, @RequestParam("email") String email){
        return "index";
    }

}
