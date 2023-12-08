import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Genders } from 'src/app/models/gender.enum';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddUserComponent>, private userService:UserServiceService){}
  genders = Object.values(Genders);
  ngOnInit(): void { 
  }

  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;


  closeDialog() {
    this.dialogRef.close();
  }
onSubmit() {
  const formData = {
    name: this.name,
    email: this.email,
    password: this.password,
    gender: this.gender,
    birthDate: this.birthDate,
  };
  this.userService.addUser(formData).subscribe(a=>console.log("User Added...!!!"))
  Swal.fire("SignUp Successfully...!!!")

  this.dialogRef.close(formData);
}
getCategoryValues(): string[] {
  return Object.keys(Genders)
    .filter(key => typeof Genders[key as keyof typeof Genders] !== 'number')
    .map(key => Genders[key as keyof typeof Genders] as unknown as string);
}

}
