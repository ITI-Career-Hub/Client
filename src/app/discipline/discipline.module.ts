import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineComponent } from './discipline/discipline.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DisciplineRoutingModule } from './discipline-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NavModule } from '../nav/nav.module';



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
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    NavModule
  ]
})
export class DisciplineModule { }
