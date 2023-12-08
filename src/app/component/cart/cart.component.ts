import { Component, Input, OnInit } from '@angular/core';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { LibraryServiceService } from 'src/app/service/library-service.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/authentication/auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  user1: any;
  data!: any;
  userId: any;
  sweetAlertService: any;
  id: any

  constructor(private libService: LibraryServiceService, private learnService: LearningServiceService, private userService: UserServiceService, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.isUserId.subscribe((valueId) => {
      console.log(valueId);
      this.userId = valueId;
      if (valueId !== 0) {
        this.userService.getById(valueId).subscribe((a) => {
          this.data = a.courses;
          console.log(this.data);
          this.user1 = a;
          this.dataSource.data = this.data;
        });
      }
    });


    this.userService.getById(this.userId).subscribe((a) => {
      this.data = a.courses;
      console.log(this.data);
      this.user1 = a;
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
    this.learnService.deletefromcart(this.userId, course.courseId).subscribe(() => {
      setTimeout(() => Swal.fire("Deleted from cart...!!!"), 100)

    });
    setTimeout(() => {
      this.userService.getById(this.userId).subscribe((a) => {
        this.data = a.courses;
        console.log(this.data);
        this.user1 = a;
        this.dataSource.data = this.data;
        this.learnService.setcartCount(this.data.length)
      })
    }, 100)
  }
  onCheckout(): void {
    Swal.fire({
      title: 'Proceed checkout with this order?',
      text: 'This will confirm your order placement!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Proceed Cheackout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.libService.checkoutCourse(this.userId).subscribe(a => { });
        setTimeout(() => {
          Swal.fire("Subcribed Successfully...!!! ");
          this.userService.getById(this.userId).subscribe((a) => {
            this.data = a.courses;
            console.log(this.data);
            this.user1 = a;
            this.dataSource.data = this.data;
            this.userService.getById(this.userId).subscribe(a => { this.learnService.setcartCount(a.courses.length) })
          })
        }, 100)
      }
    });


    
    

  }
  calculateTotalCost(): number {
    let totalCost = 0;
    if (this.data) {
      for (const course of this.data) {
        totalCost += course.price;
      }
    }
    return totalCost;
  }
}
