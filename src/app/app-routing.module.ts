import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { DisciplineComponent } from './discipline/discipline/discipline.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { CompanyAttendanceComponent } from './company/company-attendance/company-attendance.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { AdminAuthGuard } from './core/adminAuth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'interviews',
    component: CompanyAttendanceComponent,
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
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
    // path: 'signup',
    loadChildren: () =>
      import('./admin/student-own-register/studnet-own-register.module').then((m) => m.StudnetOwnRegisterModule),
  },
  {
    path: 'staff/register',
    loadChildren: () =>
      import('./admin/admin-register-staff/admin-register-staff.module').then((m) => m.AdminRegisterStaffModule),
    canActivate: [AuthGuard]
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
    path: 'admin/profile',
    // canActivate: [AdminAuthGuard],
    loadChildren: () =>
      import('./admin/admin-profile/admin-profile.module').then((m) => m.AdminProfileModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
  }, {
    path: 'company/status/:eventId/:companyId',
    loadChildren: () =>
      import('./admin/company-status/company-status.module').then((m) => m.CompanyStatusModule),
  },
  {
    path: 'track/:id',
    loadChildren: () =>
      import('./admin/admin-staff-student/admin-staff-student.module').then((m) => m.AdminStaffStudentModule),
  },
  {
    path: 'staff/profile',
    loadChildren: () =>
      import('./admin/staff-profile/staff-profile.module').then((m) => m.StaffProfileModule),
  }
  , {
    path: 'student/profile',
    component: ProfileComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),

  },
  {
    path: 'test',
    component: ExamplePdfViewerComponent,


  },

  {

    path: 'discipline',
    component: DisciplineComponent,
    loadChildren: () =>
      import('./discipline/discipline.module').then((m) => m.DisciplineModule),
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
