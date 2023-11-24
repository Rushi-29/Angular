import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningServiceService  {

    api="http://localhost:8080/Course/delete"
    api1="http://localhost:8080/Course/add"
    addUser="http://localhost:8080/user"
    deleteCart="http://localhost:8080/user/courses"

  constructor(private client:HttpClient) { }

  getAllCourses():Observable<any>{
    
    return this.client.get<any>( `http://localhost:8080/Course`)
   }
   addCourse(courseForm: any):Observable<String>{
    console.log("addcourse called")
    return this.client.post<String>( this.api1,courseForm)
   }

   deleteCourse(courseId:any){
    return this.client.delete( `${this.api}/${courseId}`)
   }

   addUsers(user:any){
    return this.client.post<String>(this.addUser,user)
   }
   updateCourse(courseId:any,user:any){
    return this.client.put( `${this.api}/${courseId}`,user)
   }

   linkUserCourse(userId:any,courseId:any){
    return this.client.get( `${this.addUser}/${userId}/${courseId}`)
   }
   deletefromcart(userId:any,courseId:any){
    return this.client.get( `${this.deleteCart}/${userId}/${courseId}`)
   }

   
}
