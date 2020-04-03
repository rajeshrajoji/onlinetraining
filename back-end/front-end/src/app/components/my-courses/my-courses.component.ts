import { Component, OnInit } from '@angular/core';
import {User} from '../../model/model.user';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  currentUser: User;
  courses:any[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.coursesService.getCourses(parseInt(this.currentUser.id)).subscribe(u => {
         this.courses = u;
    });

  }

}
