import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LearningServiceService } from 'src/app/service/learning-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  isLogIn!:boolean;

  

  
  constructor(private formBuilder: FormBuilder, private learnService:LearningServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      console.log('Form submitted:', this.loginForm.value);
      this.learnService.addUsers(this.loginForm.value).subscribe(()=>{
        console.log('Login');
      });
    }

}
}
