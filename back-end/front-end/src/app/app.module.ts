import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpModule} from '@angular/http';
import {AccountService} from './services/account.service';
import {CoursesService} from './services/courses.service';
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from './app.routing';
import {UrlPermission} from './urlPermission/url.permissions';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutComponent,
    NotFoundComponent,
    MyCoursesComponent,
    HomeComponent,
    CoursesComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
   MatButtonModule,
   MatIconModule,
   MatMenuModule,
   MatToolbarModule,
 ] ,
  providers: [
    AuthService,
    AccountService,
    UrlPermission,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
