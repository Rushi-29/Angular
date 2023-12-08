import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit{

  constructor(private authService:AuthService,private router:Router){}
OnLogout() {
this.authService.logout();
setTimeout(()=>Swal.fire("Logout successfully"),100)
this.router.navigate(['/login']);
}
  ngOnInit(): void {
  // console.log('Method not implemented.');
  }

}
