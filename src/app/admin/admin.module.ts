import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { MatChipsModule } from '@angular/material/chips';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TablesRoutingModule } from './tables/tables-routing.module';
import { CompanyProfileModule } from './company-profile/company-profile.module';
import { CompanyStatusComponent } from './company-status/company-status.component';
import { AdminStaffStudentComponent } from './admin-staff-student/admin-staff-student.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatTabsModule,
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, CompanyProfileModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, AdminProfileComponent, CompanyStatusComponent, AdminStaffStudentComponent]
})
export class AdminModule { }
