import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserServiceService } from './userService/user-service.service';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LearningServiceService implements OnInit {

    api="http://localhost:8080/Course/delete"
    api1="http://localhost:8080/Course/add"
    addUser="http://localhost:8080/user"
    deleteCart="http://localhost:8080/user/courses"
    update="http://localhost:8080/Course/update"
    private cartItemCount = new BehaviorSubject<number>(0);
   count$=this.cartItemCount.asObservable();
    userId:any;
  constructor(private client:HttpClient,private userService:UserServiceService,private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.isUserId.subscribe(a=>{this.userId=a,this.userService.getById(this.userId).subscribe(a=>this.cartItemCount.next(a.length));});
  }
   
  setcartCount(count:any):void{
    this.cartItemCount.next(count);
  }
  getAllCourses():Observable<any>{
    
    return this.client.get<any>( `http://localhost:8080/Course`)
   }
   addCourse(courseForm: any):Observable<String>{
    console.log("addcourse called")
    return this.client.post( this.api1,courseForm,{responseType:"text"})
   }

   deleteCourse(courseId:any){
    return this.client.delete( `${this.api}/${courseId}`,{responseType:"text"})
   }

   addUsers(user:any){
    return this.client.post(this.addUser,user,{responseType:"text"})
   }
   updateCourse(course:any){
    return this.client.put( this.update,course,{responseType:"text"})
   }

   linkUserCourse(userId:any,courseId:any){
    return this.client.get( `${this.addUser}/${userId}/${courseId}`,{responseType:"text"})
   }
   deletefromcart(userId:any,courseId:any){
    return this.client.delete( `${this.deleteCart}/${userId}/${courseId}`,{responseType:"text"})
   }


}
