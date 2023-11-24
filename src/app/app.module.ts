import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ShowCoursesComponent } from './component/show-courses/show-courses.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { HomeComponent } from './pages/all-courses/home/home.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { LibraryComponent } from './component/library/library.component';
import { CartComponent } from './component/cart/cart.component';
import { UserCoursesComponent } from './pages/user-courses/user-courses.component' 
import { MatTableModule } from '@angular/material/table';

// const routs:Routes =[
//   {}
// ]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllCoursesComponent,
    ShowCoursesComponent,
    HomeComponent,
    AddCourseComponent,
    LoginComponent,
    LibraryComponent,
    CartComponent,
    UserCoursesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
