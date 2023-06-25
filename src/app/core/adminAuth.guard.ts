import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (String(userInfo["roleName"]).toLowerCase() == "admin") {
      console.log(userInfo["roleName"])
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
