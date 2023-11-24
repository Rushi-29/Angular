import { Component, Input, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit{
  courseId!:number;

  constructor(private learnService:LearningServiceService){}
ngOnInit(): void {
  
}


onDelete( course: any)
 {
  console.log(course.courseId)
  this.learnService.deleteCourse(course.courseId).subscribe(a=>console.log("subscribed") );
}


@Input() data!:any[];
}
