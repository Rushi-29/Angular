import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  api= "http://localhost:8080/user"
  api1= "http://localhost:8080/user/email"
  getAll="http://localhost:8080/user/user"
  delete= "http://localhost:8080/user/Id"

  constructor(private client :HttpClient) { }

getById(id:any):Observable<any>{
  return this.client.get(`${this.api}/${id}`);
}
getByEmail(email:any,password:any):Observable<any>{
  return this.client.get(`${this.api1}/${email}/${password}`);
}
getAllUsers():Observable<any>{
  return this.client.get(this.getAll)
}
addUser(user:any){
  return this.client.post(this.api,user,{responseType:'text'})
}
deleteUser(id:any){
  return this.client.delete(`${this.delete}/${id}`)
}



}
