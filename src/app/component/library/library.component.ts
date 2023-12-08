import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  course!:any[];
  userId:any;

  constructor(private learnService:LearningServiceService, private libService:LibraryServiceService, private authService:AuthService){}

  ngOnInit(): void {
    this.authService.isUserId.subscribe(a=>this.userId=a)
    // this.learnService.getAllCourses().subscribe({next :data=>{ this.course=data}})
     this.libService.getLibCourse(this.userId).subscribe(data=> this.course=data)
    setTimeout(()=>{console.log(this.course)},100)
     
  }
}
