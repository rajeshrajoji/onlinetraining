import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../model/model.user';
import { Observable } from 'rxjs';
import {UserCourse} from '../model/model.usercourse';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';

@Injectable()
export class CoursesService {
  constructor(public http: HttpClient) { }

  getUserCourses(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }

  getAllCoursesList(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/courses');
  }

  getCourseByCourseId(couserId: any): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/courseInfo/'+ couserId);
  }


  enrollToCourse(id: any, courseId: number) : Observable<any> {
    console.log("id:"+id);
    let u = {
      "id":id,
      "couserId":courseId,
    };
    return this.http.post(AppComponent.API_URL + '/course/enroll', u);
  }
  getCourses(id: number) : Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/getUserInfo/'+ id);
  }

}
