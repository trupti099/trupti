import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { Role } from './shared/models/role.model';
const adminRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'psp',
    loadChildren: () => import('./views/psp/psp.module').then(m => m.PspModule)
  },
  {
    path: 'pos',
    loadChildren: () => import('./views/pos/pos.module').then(m => m.PosModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./views/crm/crm.module').then(m => m.CrmModule)
  },
  {
    path: 'account-manager',
    loadChildren: () => import('./views/account-manager/account-manager.module').then(m => m.AccountManagerModule)
  },
  {
    path: 'delivery-boys',
    loadChildren: () => import('./views/delivery-boys/delivery-boys.module').then(m => m.DeliveryBoysModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./views/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'parcels',
    loadChildren: () => import('./views/parcels/parcel.module').then(m => m.ParcelModule)
  },
  {
    path: 'transportation',
    loadChildren: () => import('./views/transportation/transportation.module').then(m => m.TransportationModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'supports',
    loadChildren: () => import('./views/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
  },
];


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    canActivate: [AuthGaurd],
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes,
    data: { roles: [Role.admin,Role.psp,Role.pos] }
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
