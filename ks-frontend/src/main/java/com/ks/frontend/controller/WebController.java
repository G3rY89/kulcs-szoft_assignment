package com.ks.frontend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Controller
public class WebController {

    @Autowired
    private RestTemplate restTemplate;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String renderIndex(){
        return "index";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String registerUser(){
        return "registration";
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public String showAllUsers(Model model){
        final String URL = "http://localhost:8762/ks-userservice/users";
        HttpHeaders headers = new HttpHeaders();
        headers.set("TOKEN", "QWxhZGRpbjpPcGVuU2VzYW1l");
        HttpEntity<String> request = new HttpEntity<>(headers);
        ResponseEntity<List<Object>> responseEntity = restTemplate.exchange(URL, HttpMethod.GET, request, new ParameterizedTypeReference<List<Object>>() {
        });
        List<Object> users = responseEntity.getBody();
        model.addAttribute("users", users);
        return "users";
    }
}
