import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditProfileComponent } from './student-edit-profile.component';

const routes: Routes = [
    {
        path: 'edit',
        component: StudentEditProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentEditProfileRoutingModule { }
