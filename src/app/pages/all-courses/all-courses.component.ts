import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  course!:any[];

  constructor(private learnService: LearningServiceService) {
      
    }
    ngOnInit(): void {
       this.loadCourses()
    }

    loadCourses(){
      this.learnService.getAllCourses().subscribe({next :data=>{ this.course=data}})
      // console.log(this.course);
    }


}
