import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileRoutingModule } from './admin-profile-routing.module';
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
import { DataService } from '../tables/data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminProfileRoutingModule,
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule
  ],
  providers: [DataService]
})
export class AdminProfileModule { }
