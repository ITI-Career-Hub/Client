import { NgModule } from '@angular/core';
import { CompanyOwnerRegisterComponent } from './company-owner-register.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CompanyOwnerUserRoutingModule } from './company-owner-register-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [CompanyOwnerRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    CompanyOwnerUserRoutingModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
  ]
})
export class CompanyOwnerRegisterModule { }
