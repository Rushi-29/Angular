import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserServiceService } from '../service/userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
//  userId:any;

  constructor(private userService:UserServiceService) { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  private isAdmin = new BehaviorSubject<boolean>(false);
  private userId = new BehaviorSubject<number>(0);

  get isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  get isAdminUser(): BehaviorSubject<boolean> {
    return this.isAdmin;
  }
  get isUserId(): BehaviorSubject<number> {
    return this.userId
  }

  // getIsAdmin(): BehaviorSubject<boolean> {
  //   return this.isAdmin
  // }


  login(username: string, password: string): void {
      this.userService.getByEmail(username,password).subscribe(a=>{this.user=a})
    
   if(this.user!= null){
      this.userId.next(this.user.userId)
      console.log(this.userId)
       }
    // console.log(this.user.email)
    if (username === 'admin' && password === 'admin123') {
      this.loggedIn.next(true);
      this.isAdmin.next(true);
    } else if (username === this.user.email && password === this.user.password) {
      console.log(this.user.userId)
      this.loggedIn.next(true);
      this.isAdmin.next(false);
    } else {
      this.loggedIn.next(false);
      this.isAdmin.next(false);
    } 
  }
    
 

    // if(this.user!= null){
    //   this.userId =this.user.userId
    //    }
  
  
  logout(): void {
    this.userId.next(0);
    this.loggedIn.next(false);
    this.isAdmin.next(false);
  }
  
  
}
