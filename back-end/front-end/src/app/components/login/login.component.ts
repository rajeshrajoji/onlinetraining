import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import {CoursesService} from '../../services/courses.service';
import { Router , ActivatedRoute, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService) { }



  ngOnInit() {
  }
  courseVal: any;
  create() {
    this.courseVal = this.route.snapshot.queryParamMap.get('course');
    this.courseVal = this.courseVal == null ? "0": this.courseVal;
    this.router.navigate(['/register', this.courseVal]);
  }

  login() {
    let courseId = this.route.snapshot.paramMap.get('course');
    this.courseVal = courseId == null ? "0": courseId;
    this.authService.authenticate(this.user, (e) => {
      console.log(e);
      let resp: any;
      resp = e.principal;
      if(this.courseVal !=0) {
          this.coursesService.enrollToCourse(resp.id, this.courseVal).subscribe(result => {
            let navigationExtras: NavigationExtras = {
                  queryParams: {
                        "isEnrolled": "Enrolled"
                }
            };
            this.router.navigate(['profile'], navigationExtras);
          });
      }else{
        this.router.navigateByUrl('/profile');
      }
      // this.user.fullName = 'ndh';
      if (resp) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resp));
      }
    });
  }
}
