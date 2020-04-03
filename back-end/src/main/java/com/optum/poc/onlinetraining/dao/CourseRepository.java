package com.optum.poc.onlinetraining.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optum.poc.onlinetraining.entities.Course;


@Repository
public interface CourseRepository  extends JpaRepository<Course, Long> {
	
	//@Query("select t from Course t join User u where u.userid = :userid")
	List<Course> findByUsers_id(Long userId);
}
