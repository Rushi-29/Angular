import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryServiceService } from '../service/library-service.service';

@Component({
  selector: 'app-own-courses',
  templateUrl: './own-courses.component.html',
  styleUrls: ['./own-courses.component.css']
})
export class OwnCoursesComponent implements OnInit{
  userId: any;
  data:any;
  length:any;

  constructor(private route:ActivatedRoute,private libService:LibraryServiceService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log(this.userId);
    });
    this.libService.getLibCourse(this.userId).subscribe(a => this.data = a) 

  }

}
