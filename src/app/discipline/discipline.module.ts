import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineComponent } from './discipline/discipline.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DisciplineRoutingModule } from './discipline-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';




@NgModule({
  declarations: [
    DisciplineComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    DisciplineRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
  ]
})
export class DisciplineModule { }
