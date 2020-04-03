package com.optum.poc.onlinetraining.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.optum.poc.onlinetraining.dao.CourseRepository;
import com.optum.poc.onlinetraining.dao.UserRepository;
import com.optum.poc.onlinetraining.entities.Course;
import com.optum.poc.onlinetraining.entities.User;
import com.optum.poc.onlinetraining.entities.UserCourse;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private UserRepository userRepository;
	
	//private LoginRepository loginRepo;
	
	public List<Course> findAllCourses() {
		return courseRepo.findAll();
	}
	
	public void saveCourse(Course courses) {
		 courseRepo.save(courses);
	}
	
	public Course saveUserCourse(UserCourse userCourse) {
		User user = userRepository.findOne(Long.valueOf(userCourse.getId()));
		System.out.println("***user"+user);
		Course course = courseRepo.findOne(Long.valueOf(userCourse.getCouserId()));
		course.getUsers().add(user);
		user.getCourses().add(course);
		System.out.println("***course"+course.toString());
		userRepository.save(user);
		return course;
	}

	public Course findByCourseId(Long courseId) {
		return  courseRepo.findOne(courseId);
	}

	public List<Course> findAllByUser(Long userId) {
		return courseRepo.findByUsers_id(userId);
	}

}
