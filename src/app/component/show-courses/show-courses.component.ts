import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css']
})
export class ShowCoursesComponent implements OnInit{
  courseId!:number;
  key:any;

  constructor(private learnService:LearningServiceService,private route: ActivatedRoute){}
ngOnInit(): void {
  //  this.route.queryParams.subscribe(params => {
  //   const key = params['key'];
  //   // Use the data as needed
  // });
  // const libCourseJson = this.route.snapshot.queryParams['key'];

    // Parse the JSON string back to an array
    // this.key = JSON.parse(libCourseJson);
}
displayedColumns: string[] = ['image', 'courseId', 'courseName', 'author', 'duration', 'price', 'description', 'rating', 'type'];

// onDelete( course: any)
//  {
//   // console.log("delete button of library")
//   console.log(course.courseId)
//   console.log("delete button of library")
//   this.learnService.deleteCourse(course.courseId).subscribe(a=>console.log("course deleted...!!!") );
// }


@Input() data!:any[];
calculateTotalCost(): number {
  let totalCost = 0;

  // Assuming 'data' is an array of courses
  if (this.data) {
    for (const course of this.data) {
      totalCost += course.price;
    }
  }

  return totalCost;
}
}
