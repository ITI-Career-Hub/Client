import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterStudentUserComponent } from './admin-register-student-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AdminRegisterStudentUserRoutingModule } from './admin-register-student-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { AvatarModule } from 'primeng/avatar';



@NgModule({
  declarations: [AdminRegisterStudentUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    AdminRegisterStudentUserRoutingModule,
    MatSelectModule,
    AvatarModule
  ]
})
export class AdminRegisterStudentUserModule { }
