import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyEditProfileComponent } from './company-edit-profile.component';
import { StudentEditProfileRoutingModule } from './company-edit-profile-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    CompanyEditProfileComponent
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
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class CompanyEditProfileModule { }
