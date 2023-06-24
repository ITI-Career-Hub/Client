import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffProfileComponent } from './staff-profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { StaffProfileRoutingModule } from './staff-profile-routing.module';



@NgModule({
  declarations: [
    StaffProfileComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    NgxExtendedPdfViewerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule,StaffProfileRoutingModule
  ]
})
export class StaffProfileModule { }
