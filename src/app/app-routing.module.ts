import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { HomeComponent } from './pages/all-courses/home/home.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { LoginComponent } from './component/login/login.component';
import { LibraryComponent } from './component/library/library.component';
import { CartComponent } from './component/cart/cart.component';
import { UserCoursesComponent } from './pages/user-courses/user-courses.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"courses", component:AllCoursesComponent},
  {path:"addCourse", component:AddCourseComponent},
  {path:"login", component:LoginComponent},
  {path:"library", component:LibraryComponent},
  {path:"cart", component:CartComponent},
  {path:"userCourses", component:UserCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
