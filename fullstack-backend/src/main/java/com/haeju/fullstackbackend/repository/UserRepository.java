package com.haeju.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haeju.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
