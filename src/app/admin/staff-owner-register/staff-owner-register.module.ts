import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffOwnerRegisterComponent } from './staff-owner-register.component';
import { StaffOwnerRegisterRoutingModule } from './staff-owner-register-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [StaffOwnerRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    StaffOwnerRegisterRoutingModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
  ]
})
export class StaffOwnerRegisterModule { }
