import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterStudentUserComponent } from './admin-register-student-user.component';

const routes: Routes = [
    {
        path: '',
        component: AdminRegisterStudentUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRegisterStudentUserRoutingModule { }
