import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentOwnRegisterComponent } from "./student-own-register.component";

const routes: Routes = [
    {
        path: '',
        component: StudentOwnRegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudnetOwnRegisterRoutingModule { }