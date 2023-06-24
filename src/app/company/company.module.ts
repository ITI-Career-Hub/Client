import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAttendanceComponent } from './company-attendance/company-attendance.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
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
import { TablesRoutingModule } from '../admin/tables/tables-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../admin/tables/data.service';
import { CompanyProfileRoutingModule } from './company-profile/company-profile-routing.module';



@NgModule({
  declarations: [
    CompanyAttendanceComponent,
    CompanyProfileComponent
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
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule,TablesRoutingModule,CompanyProfileRoutingModule
  ],
  providers:[DataService]
})
export class CompanyModule { }
