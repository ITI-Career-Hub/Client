import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStaffStudentComponent } from './admin-staff-student.component';

const routes: Routes = [
    {
        path: '',
        component: AdminStaffStudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminStaffStudentRoutingModule { }
