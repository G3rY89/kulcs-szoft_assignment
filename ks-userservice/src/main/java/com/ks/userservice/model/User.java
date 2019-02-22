package com.ks.userservice.model;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, unique = true)
    private String userName;
    @Column(nullable = false, unique = true)
    private String emailAddress;

    public User() {
    }

    public User(String userName, String emailAddress) {
        this.userName = userName;
        this.emailAddress = emailAddress;
    }

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
}
