import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  api="http://localhost:8080/library"

  constructor(private Client:HttpClient) { }

  checkoutCourse(user:any){
    return  this.Client.post(this.api,user);
  }
}
