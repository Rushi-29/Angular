import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn.getValue()) {
      console.log(this.authService.isLoggedIn.getValue())
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('hiahsfuf')
      return false;
    }
  }
}