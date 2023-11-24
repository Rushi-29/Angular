import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  api= "http://localhost:8080/user"

  constructor(private client :HttpClient) { }

getById(id:any):Observable<any>{
  return this.client.get(`${this.api}/${id}`);
}


}
