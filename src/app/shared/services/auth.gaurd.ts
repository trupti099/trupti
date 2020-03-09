import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate, CanActivateChild {
  unauthrized:boolean;
  constructor(
    private router: Router,
    private auth: AuthService

  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const currentUser = this.auth.currentUserValue;
    const FFCUser = this.auth.currentUserValue;
    if (this.auth.isUserLoggedIn) {
      // check if route is restricted by role
      if (FFCUser) {
        if (route.data.roles && route.data.roles.indexOf(FFCUser.role) === -1) {
          // role not authorised so redirect to home page
          
          this.router.navigate(['/']);
          this.unauthrized=true;
          return false;
        }
        this.unauthrized=false;
        return true;
      } else {
        if(!this.auth.isUserLoggedIn){
        console.log('You are not authrized to view this page')
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
        return false;
      }
    }
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
}


