import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<any[]>;
  currentUser;
  isEnrolled;

  constructor(private coursesService: CoursesService, public router: Router) { }

  ngOnInit() {
    this.courses = this.coursesService.getAllCoursesList();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }
  enroll(id:any, name:any) {
    if(!this.currentUser) {
      let navigationExtras: NavigationExtras = {
              queryParams: {
                  "course": id
              }
          };
      this.router.navigate(['enroll'], navigationExtras);
    }else {
        this.coursesService.enrollToCourse(this.currentUser.id, id).subscribe(msg => {
                this.isEnrolled = true;
        });
    }
  }
  viewCourse(id:any, name:any) {
    let navigationExtras: NavigationExtras = {
            queryParams: {
                "course": id
            }
    };
    this.router.navigate(['view'], navigationExtras);
  }
}
