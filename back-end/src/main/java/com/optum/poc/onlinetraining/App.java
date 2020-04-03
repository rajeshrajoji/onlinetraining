package com.optum.poc.onlinetraining;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.optum.poc.onlinetraining.dao.CourseRepository;
import com.optum.poc.onlinetraining.dao.UserRepository;
import com.optum.poc.onlinetraining.entities.Course;
import com.optum.poc.onlinetraining.entities.User;
/**
 * 
 * @author kamal berriga
 *
 */
@SpringBootApplication
public class App implements CommandLineRunner{
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	CourseRepository courseRepo;

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
	
		Course course = new Course();
		course.setName("Java");
		course.setDescription("Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible");
		
		Course course2 = new Course();
		course2.setName("Angular");
		course2.setDescription("This course starts from scratch, you neither need to know Angular 1 nor Angular 2! Angular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!");
		
		List<Course> list = new ArrayList<>();
		list.add(course2);
		list.add(course);
		
		courseRepo.save(list);
	}
}
