import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  api="http://localhost:8080/library"
  api1="http://localhost:8080/library/id"

  constructor(private Client:HttpClient) { }

  checkoutCourse(user:any):Observable<any>{
    return  this.Client.post<any>( `${this.api}/${user}`,{responseType:'text'});
  }
  getLibCourse(user:any):Observable<any>{
    return  this.Client.get<any>(`${this.api1}/${user}`);
  }
}
