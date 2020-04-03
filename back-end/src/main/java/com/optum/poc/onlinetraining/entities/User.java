package com.optum.poc.onlinetraining.entities;


/*******************************************************************************
 * 2017, this is the user entity class ,
 * this class implements users details of the spring security framework
 *******************************************************************************/

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

/**
 * Description of User.
 * 
 * 
 */
@Entity
@Table(name="users")
@Scope("session")
public  class User implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3335177629103095759L;

	public static enum Role{ USER }
	/**
	 * Description of the property id.
	 */
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id ;
	/**
	 * Description of the property email.
	 */
	@Column(unique = true)
	private String username ;
	/**
	 * Description of the property password.
	 */
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password ;
	/**
	 * Description of the property role , to grant authority to the user .
	 */
    private String  role;
    /**
	 * Description of the property full name.
	 */
    private String fullName;

    public User(){
    	
    }
    
    public User(String username,String password,String fullName){
    	this.username=username;
    	this.password= password;
    	this.fullName=fullName;
    }
	@JsonIgnore
	@Override
	public boolean isEnabled() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(role));
		return authorities;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role +
				 ",]";
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}
	

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Long getId() {
		return id;
	}

	@ManyToMany(fetch = FetchType.EAGER,
            cascade = {
                CascadeType.REFRESH,
                CascadeType.MERGE
            })
    @JoinTable(name = "user_courses",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "course_id") })
	//@JsonIgnore
	//@JsonManagedReference
	private Set<Course> courses = new HashSet<>();

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}
	
	
	
		
	
	
}
