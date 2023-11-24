import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  course!:any[];

  constructor(private learnService:LearningServiceService){}

  ngOnInit(): void {
    this.learnService.getAllCourses().subscribe({next :data=>{ this.course=data}})
  }
  
}
