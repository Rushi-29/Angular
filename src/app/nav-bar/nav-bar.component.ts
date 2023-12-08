import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../service/userService/user-service.service';
import { BehaviorSubject } from 'rxjs';
import { LearningServiceService } from '../service/learning-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  cartItemCount =0;
  userId:any;
  courses:any;
  // private cartItemCount = new BehaviorSubject<number>(0);
  constructor(private authService:AuthService, private router:Router,private userService:UserServiceService,private learnService:LearningServiceService){}
  ngOnInit(): void {
    this.authService.isUserId.subscribe(a=> this.userId = a)
    this.learnService.count$.subscribe(a=>{this.cartItemCount=a,console.log(a)})
    // this.userService.getById(this.userId).subscribe(a=> {this.courses = a.courses ,
    //   this.cartItemCount = this.courses.length;} );
    // this.cartItemCount = this.courses.length();
  }
  
OnLogout() {
this.authService.logout();
setTimeout(()=>Swal.fire("Logout successfully"),100)
this.router.navigate(['/login']);
}
isNavbarOpen=false;


toggleNavbar() {
  this.isNavbarOpen = !this.isNavbarOpen;
}
 

}