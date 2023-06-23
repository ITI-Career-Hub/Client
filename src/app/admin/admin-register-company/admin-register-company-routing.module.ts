import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterCompanyComponent } from './admin-register-company.component';

const routes: Routes = [
    {
        path: '',
        component: AdminRegisterCompanyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRegisterCompanyRoutingModule { }
