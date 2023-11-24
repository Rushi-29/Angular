import { Component, Input, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private learnService:LearningServiceService,){}
  ngOnInit(): void {
    this.getCourses();
  }
onEdit(_t22: any) {

}
data!:any[];
displayedColumns: string[] = [
  'courseId',
  'courseName',
  'author',
  'duration',
  'price',
  'description',
  'rating',
  'type',
  'actions',
  'edit'

];
dataSource = new MatTableDataSource<any>(this.data);
  
  getCourses() {
    this.learnService.getAllCourses().subscribe((courses: any[]) => {
      this.data = courses;
      this.dataSource.data = this.data;
    });
  }
//   onDelete( course: any)
//   {
//    console.log(course.courseId)
//    this.learnService.deleteCourse(course.courseId).subscribe(a=>console.log("subscribed") );
//  }
 onDelete(course: any) {
  this.learnService.deleteCourse(course.courseId).subscribe(() => {
    
  });

  this.getCourses();
  

}
}
