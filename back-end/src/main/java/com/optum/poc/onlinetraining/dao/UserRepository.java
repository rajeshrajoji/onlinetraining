package com.optum.poc.onlinetraining.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optum.poc.onlinetraining.entities.User;
/** 
 * @author kamal berriga
 *
 */
/* this the user  Repository interface  */ 
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

public User findOneByUsername(String username);


}
