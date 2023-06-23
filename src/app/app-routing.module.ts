import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { DisciplineComponent } from './discipline/discipline/discipline.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

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
    path: 'signup',
    loadChildren: () =>
      import('./admin/student-own-register/studnet-own-register.module').then((m) => m.StudnetOwnRegisterModule),
  }, 
  {
    path: 'profile',
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
