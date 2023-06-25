import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffEditProfileComponent } from './staff-edit-profile.component';


const routes: Routes = [
    {
        path: 'profile',
        component: StaffEditProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffOwnerRegisterRoutingModule { }
