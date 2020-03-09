import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/services/role-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: string;
  constructor(private _roleService: RoleService, public router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data) => {
      return this.role = this._roleService.userType;
    });
  }
  ngOnInit() {
  }

}
