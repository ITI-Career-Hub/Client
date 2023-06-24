import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAttendanceComponent } from './company-attendance/company-attendance.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    CompanyAttendanceComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    NgxExtendedPdfViewerModule
  ]
})
export class CompanyModule { }
