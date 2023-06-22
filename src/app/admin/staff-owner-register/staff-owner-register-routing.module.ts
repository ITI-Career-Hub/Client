import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffOwnerRegisterComponent } from './staff-owner-register.component';


const routes: Routes = [
    {
        path: '',
        component: StaffOwnerRegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffOwnerRegisterRoutingModule { }
