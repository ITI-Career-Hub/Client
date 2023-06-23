import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterStaffComponent } from './admin-register-staff.component';

const routes: Routes = [
    {
        path: '',
        component: AdminRegisterStaffComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRegisterStaffRoutingModule { }
