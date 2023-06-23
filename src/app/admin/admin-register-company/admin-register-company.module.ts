import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterCompanyRoutingModule } from './admin-register-company-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AdminRegisterCompanyComponent } from './admin-register-company.component';



@NgModule({
  declarations: [AdminRegisterCompanyComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    AdminRegisterCompanyRoutingModule,
    MatSelectModule
  ]
})
export class AdminRegisterCompanyModule { }
