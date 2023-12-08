import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { Category } from 'src/app/models/course.enum';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  // cartItemCount =1;
  // // userId:any;
  // courses:any;

  data!: any[];
  cart: number[] = [];
  filteredData: any
  selectedType: string = 'All';
  visited = false
  // courseTypes: string[] = [];
  categories = Object.keys(Category);
  userId: any;
  constructor(private learnService: LearningServiceService, private router: Router, private authService: AuthService,
    private userService: UserServiceService
  ) { }
  ngOnInit(): void {
    this.learnService.getAllCourses().subscribe(a => { this.data = a; this.filteredData = this.data; })
    this.filteredData = this.data;
    //this.filterData();
    this.authService.isUserId.subscribe((valueId) => {
      console.log(valueId);
      this.userId = valueId;
    })
  }


  getCategoryValues(): string[] {
    return Object.keys(Category)
      .filter(key => typeof Category[key as keyof typeof Category] !== 'number')
      .map(key => Category[key as keyof typeof Category] as unknown as string);
  }


  filterData(): void {
    if (this.selectedType === 'All') {
      this.filteredData = this.data; // Show all courses
    } else {
      this.filteredData = this.data.filter(course => course.type === this.selectedType);
    }
  }
  isInCart(course: any): boolean {
    return this.cart.includes(course.courseId);
  }
  serverMsg: any;
  async onAddCart(course: any): Promise<void> {
    if (course.availableSlots > 0) {
      try {
        const serverMsg = await this.learnService.linkUserCourse(this.userId, course.courseId).toPromise();

        this.serverMsg = serverMsg;
        this.cart.push(course.courseId);

        if (this.serverMsg === 'Already subscribed...!!!') {
          Swal.fire('Already subscribed...!!!');
        } else {
          Swal.fire('Added to cart');
        }

        const user = await this.userService.getById(this.userId).toPromise();
        this.learnService.setcartCount(user.courses.length);

        // Uncomment the line below if needed
        // await this.learnService.updateCourse(course).toPromise();
        // "quantity updated" logic here if needed
      } catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
    } else {
      Swal.fire('No slots available...!!!');
      console.log('No available slots for this course.');
    }
  }

  goToCart(): void {
    console.log("before routing")
    this.router.navigate(['/user/cart']);
    console.log("after routing")
  }

}
