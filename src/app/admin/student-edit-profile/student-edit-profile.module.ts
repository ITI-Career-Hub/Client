import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditProfileComponent } from './student-edit-profile.component';
import { StudentEditProfileRoutingModule } from './student-edit-profile-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { StudnetOwnRegisterRoutingModule } from '../student-own-register/student-own-register-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    StudentEditProfileComponent
  ],
  imports: [
    CommonModule,
    StudentEditProfileRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    StudnetOwnRegisterRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class StudentEditProfileModule { }
