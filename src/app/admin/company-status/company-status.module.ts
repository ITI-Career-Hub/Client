import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyStatusRoutingModule } from './company-status-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TablesRoutingModule } from '../tables/tables-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyStatusRoutingModule,
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule
  ]
})
export class CompanyStatusModule { }
