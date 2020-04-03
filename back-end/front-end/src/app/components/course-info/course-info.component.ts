import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, public router: Router, private coursesService: CoursesService) { }
  courseId;
  currentUser;
  courseInfo;
  isEnrolled;

  ngOnInit() {
      this.courseId = this.route.snapshot.queryParamMap.get('course');
      this.coursesService.getCourseByCourseId(this.courseId).subscribe(x => {
             this.courseInfo= x;
      });
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  enroll() {
    if(!this.currentUser) {
      let navigationExtras: NavigationExtras = {
              queryParams: {
                  "course": this.courseId
              }
          };
      this.router.navigate(['enroll'], navigationExtras);
    }else {
        this.coursesService.enrollToCourse(this.currentUser.id, this.courseId).subscribe(msg => {
                this.isEnrolled = true;
        });
    }
  }

}
