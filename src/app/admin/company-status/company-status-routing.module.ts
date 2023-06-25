import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyStatusComponent } from './company-status.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyStatusRoutingModule { }
