import { Component, Input, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


user1:any;
  data!:any;

  constructor(private libService :LibraryServiceService, private learnService:LearningServiceService,private userService:UserServiceService){}
  ngOnInit(): void {
   
      this.userService.getById(1).subscribe((a) => {
        this.data = a.courses;
        console.log(this.data);
        this.user1=a;
        this.dataSource.data = this.data;
      });
    
  }

displayedColumns: string[] = [
  'courseId',
  'courseName',
  'author',
  'duration',
  'price',
  'description',
  'rating',
  'type',
  'actions'

];
dataSource = new MatTableDataSource<any>(this.data);
  
  
//   onDelete( course: any)
//   {
//    console.log(course.courseId)
//    this.learnService.deleteCourse(course.courseId).subscribe(a=>console.log("subscribed") );
//  }
 onDelete(course: any) {
  this.learnService.deletefromcart(1,course.courseId).subscribe(() => {
    
  });
}
onCheckout() {
  this.libService.checkoutCourse(this.user1).subscribe(a=>console.log("Courses Added to Library...!!!"))
  }
}
