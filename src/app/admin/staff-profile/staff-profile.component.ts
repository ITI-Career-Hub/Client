import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../../add-modal/add-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { CompanyService } from 'src/app/services/company.service';
import { TrackService } from 'src/app/services/track.service';
import { AddCompanyModalComponent } from 'src/app/add-track-modal/add-track-modal.component';
import { DataService } from 'src/app/admin/tables/data.service';
import { CompanyProfileService } from 'src/app/services/companyProfile.service';
import { StaffProfileService } from 'src/app/services/staffProfile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent implements OnInit {

  studentsData: MatTableDataSource<Object[]>;
  eventData: MatTableDataSource<Object[]>;
  studtesSize = 0;
  eventSize = 0;

  firstName: string;
  lastName: string;
  openModal(tab: string): void {
    this.dialog.open(AddModalComponent, {
      width: '400px',
      data: { tab: tab }
    });

  }

  openCompanyModal(tab: string): void {
    this.dialog.open(AddCompanyModalComponent, {
      width: '400px',
      data: { tab: tab }
    });

  }



  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  studentsColumns = ['name', 'email'];
  eventColumns = ['eventName', 'startDate', 'endDate', 'branch'];



  // dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<Object[]>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private router: Router, public dialog: MatDialog, private eventService: EventService, private staffProfileService: StaffProfileService) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    // this.selection = new SelectionModel<UserData>(true, []);
    const userData = JSON.parse(localStorage.getItem("userInfo"))
    this.image = userData.pictureUrl
    this.firstName = userData["firstName"]
    this.lastName = userData["lastName"]
    this.staffProfileService.getStudents(1).subscribe((response) => {
      this.studentsData = response
      this.studtesSize = response.length;
      this.studentsData = new MatTableDataSource(response);
      this.selection = new SelectionModel<Object[]>(true, []);
      console.log(response)
    }, (error) => {
      console.log(error)
    })

    this.staffProfileService.getEvents(1).subscribe((response) => {
      this.eventData = response
      this.eventSize = response.length;
      this.eventData = new MatTableDataSource(response);
      this.selection = new SelectionModel<Object[]>(true, []);
      console.log(response)
    }, (error) => {
      console.log(error)
    })

  }

  ngAfterViewInit() {
    this.studentsData.paginator = this.paginator;
    this.studentsData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.studentsData.filter = filterValue.trim().toLowerCase();
    if (this.studentsData.paginator) {
      this.studentsData.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.studentsData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.studentsData.data.forEach(row => this.selection.select(row));
  }



  avatarImageUrl: string = 'assets/default-avatar.png';

  vatarImageUrl: string = 'assets/default-avatar.png'; // Default avatar image URL

  handleImageError() {
    this.avatarImageUrl = 'assets/default-avatar.png'; // Handle image loading errors by setting a default avatar image
  }


  progressPercent: number = 0;

  image: string | null = null;
  @ViewChild('imageInput') imageInput: any;

  openImagePicker() {
    this.imageInput.nativeElement.click();
  }

  handleImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.image = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  onEventRowClick(row: any) {
    this.router.navigateByUrl(`/company/status/${row.id}`)
  }


  edit() {
    this.router.navigateByUrl("/staff/edit")
  }

}
