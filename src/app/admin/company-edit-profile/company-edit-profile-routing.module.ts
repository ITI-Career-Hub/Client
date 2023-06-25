import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyEditProfileComponent } from './company-edit-profile.component';

const routes: Routes = [
    {
        path: 'profile',
        component: CompanyEditProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentEditProfileRoutingModule { }
