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
import { AdminNavBarComponent } from './Admin/admin-nav-bar/admin-nav-bar.component';
import { FormsModule } from '@angular/forms';  
import { MatButtonModule  } from '@angular/material/button';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { UsersComponent } from './pages/user-List/users/users.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserTableComponent } from './pages/user-List/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { OwnCoursesComponent } from './own-courses/own-courses.component';
import { MatSortModule } from '@angular/material/sort';

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
    AdminNavBarComponent,
    UserTableComponent,
    AddUserComponent,
    OwnCoursesComponent,
    
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
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatSortModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
