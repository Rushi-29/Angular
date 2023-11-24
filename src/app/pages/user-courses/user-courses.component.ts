import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements  OnInit{


data!:any[];


  constructor(private learnService:LearningServiceService){}
  ngOnInit(): void {
    this.getUserCourses();
  }
  getUserCourses(){
    this.learnService.getAllCourses().subscribe(a=>this.data=a);
  }
  onAddCart(course: any) {
    this.learnService.linkUserCourse(1,course.courseId).subscribe(()=>console.log("inside linked method"))
    }

}
