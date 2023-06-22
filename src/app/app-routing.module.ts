import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./admin/admin-register-student-user/admin-register-student-user.module').then((m) => m.AdminRegisterStudentUserModule),
  },
  {
    path: 'signup/:token',
    loadChildren: () =>
      import('./admin/student-own-register/studnet-own-register.module').then((m) => m.StudnetOwnRegisterModule),
  },
  {
    path: 'staff/register',
    loadChildren: () =>
      import('./admin/admin-register-staff/admin-register-staff.module').then((m) => m.AdminRegisterStaffModule),
  },
  {
    path: 'staff/signup/:token',
    loadChildren: () =>
      import('./admin/staff-owner-register/staff-owner-register.module').then((m) => m.StaffOwnerRegisterModule),
  },
  {
    path: 'company/register',
    loadChildren: () =>
      import('./admin/admin-register-company/admin-register-company.module').then((m) => m.AdminRegisterCompanyModule),
  },
  {
    path: 'company/signup/:token',
    loadChildren: () =>
      import('./admin/company-owner-register/company-owner-register.module').then((m) => m.CompanyOwnerRegisterModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),

  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
