import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../model/model.user';
import {AccountService} from '../../services/account.service';
import {CoursesService} from '../../services/courses.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  courseVal;

  constructor(public accountService: AccountService,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService) {
  }

  ngOnInit() {
  }

  register() {
    let courseId = this.route.snapshot.queryParamMap.get('course');
    courseId = courseId == null ? "0": courseId;
    this.courseVal = courseId;
    if(parseInt(courseId) != 0) {
      this.coursesService.getCourseByCourseId(courseId).subscribe(x => {
              let course = {
                  "id":courseId,
                  "description": x.description,
                  "name":x.name,
              };
              this.user.courses[0]= course;
              this.accountService.createAccount(this.user).subscribe(data => {
                  this.router.navigate(['/login']);
                }, err => {
                  console.log(err);
                  this.errorMessage = 'username already exist';
                }
              );
      });
    }else {
        this.accountService.createAccount(this.user).subscribe(data => {
            this.router.navigate(['/login']);
          }, err => {
            console.log(err);
            this.errorMessage = 'username already exist';
          }
        );
    }

  }

 login() {
   let courseId = this.route.snapshot.queryParamMap.get('course');
   courseId = courseId == null ? "0": courseId;
   this.router.navigate(['/login', courseId]);
 }

}
