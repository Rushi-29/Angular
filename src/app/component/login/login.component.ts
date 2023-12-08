import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { AddUserComponent } from 'src/app/pages/add-user/add-user.component';
import { LearningServiceService } from 'src/app/service/learning-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  isLogIn!:boolean;
  username!: string;
  password!: string;
  user!:any;
buttonsNav: any;

  

  
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder, private learnService:LearningServiceService,private authService: AuthService, private router: Router,private userService:UserServiceService) { }

  openSignupModal() {
    // const dialogRef =
    this.dialog.open(AddUserComponent, {
      width: '400px',
      disableClose:true
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed with result:', result);
    // });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    console.log("login componant")


  }

  // onSubmit() {
  //   if (this.loginForm.valid) {



  //     console.log('Form submitted:', this.loginForm.value);
  //     this.learnService.addUsers(this.loginForm.value).subscribe(()=>{
  //       console.log('Login');
  //     });
  //   }
  // }

  login(): void {
    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.get('password')?.value);

    this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);

    if (this.authService.isLoggedIn ) {
    
      this.authService.isAdminUser.subscribe(isAdmin => {
        if (isAdmin) {
          console.log(isAdmin);
          console.log("in admin route")
          // localStorage.setItem('userId', this.authService.getUserId());/
          setTimeout(()=>Swal.fire("welcome Admin"),100)
          this.router.navigate(['admin']);
          console.log("after navigate")
        } else {
          Swal.fire("Login Successfully")
          this.router.navigate(['user']);
        }
      });
    } else {
      console.error('Authentication failed');
    }
  }

  logout(): void {
    this.authService.logout();
    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }

}
