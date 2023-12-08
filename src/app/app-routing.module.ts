import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { HomeComponent } from './pages/all-courses/home/home.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { LoginComponent } from './component/login/login.component';
import { LibraryComponent } from './component/library/library.component';
import { CartComponent } from './component/cart/cart.component';
import { UserCoursesComponent } from './pages/user-courses/user-courses.component';
import { AuthGuard } from './authentication/auth.guard';
import { AdminAuthGuard } from './authentication/admin-auth.guard';
import { AdminNavBarComponent } from './Admin/admin-nav-bar/admin-nav-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserTableComponent } from './pages/user-List/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ShowCoursesComponent } from './component/show-courses/show-courses.component';
import { OwnCoursesComponent } from './own-courses/own-courses.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  // {path:"signup", component:AddUserComponent},
  {path:"admin", component:AdminNavBarComponent,
  canActivate: [AuthGuard, AdminAuthGuard],
  children:[
    {path:"", component:HomeComponent,pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"courses", component:AllCoursesComponent},
    {path:"userList",component:UserTableComponent},
    {path:"addCourse", component:AddCourseComponent},
    {path:"showAll", component:OwnCoursesComponent}

    
  ]},

  {path:'user' , component:NavBarComponent,
  // canActivate: [AuthGuard],
  children:[
    {path:"", component:HomeComponent,pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"library", component:LibraryComponent},
    {path:"cart", component:CartComponent},
    {path:"userCourses", component:UserCoursesComponent},
    
  ]



},
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // {path:"addCourse", component:AddCourseComponent},
  {path:"login", component:LoginComponent},
  // {path:"library", component:LibraryComponent},
  // {path:"cart", component:CartComponent},
  // {path:"userCourses", component:UserCoursesComponent},
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'admin', component: AdminNavBarComponent },
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
