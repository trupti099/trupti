import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  userType: string;
  constructor(private auth: AuthService, public router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data) => {
      const FFCUser = this.auth.currentUserValue;
      if (this.auth.isUserLoggedIn && FFCUser) {
        if (FFCUser.role) {
          return this.userType = FFCUser.role
        }
      }
    });
  }
}
