import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyOwnerRegisterComponent } from './company-owner-register.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyOwnerRegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyOwnerUserRoutingModule { }
