import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/course.enum';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements  OnInit {
  courseForm!: FormGroup;
  categories = Object.values(Category); 
  
  constructor(private learnService : LearningServiceService ,private fb: FormBuilder, private routes :Router){}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.courseForm = this.fb.group({
      imageUrl:['',Validators.required],
      courseName: ['',Validators.required],
      author: ['',Validators.required ],
      duration: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      rating: ['',Validators.required],
      type: ['',Validators.required] ,
      availableSlots: ['5',Validators.required] 
    });
  }
  
  // addCousre(courseForm:any){
  //   console.log("inside add courses method")
  //   this.learnService.addCourse(courseForm)
  // }
  onSubmit() {
    // event.preventDefault();
    console.log(this.courseForm.value);
    this.learnService.addCourse(this.courseForm.value).subscribe(a=> console.log("course added"))

    // this.learnService.addCourse(this.courseForm.value)
    console.log("in onsubmit method")
    this.routes.navigate(["admin/courses"])   
  }
}
