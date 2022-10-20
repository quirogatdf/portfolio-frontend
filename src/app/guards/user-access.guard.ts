import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccessGuard implements CanActivate {
  constructor ( 
    private authService: AuthService,
    private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let token = sessionStorage.getItem('token');
      console.log(token);
      if (token != null) {
        this.router.navigate(['/home']);
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
