import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterStaffRoutingModule } from './admin-register-staff-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AdminRegisterStaffComponent } from './admin-register-staff.component';



@NgModule({
  declarations: [AdminRegisterStaffComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    AdminRegisterStaffRoutingModule,
    MatSelectModule
  ]
})
export class AdminRegisterStaffModule { }
