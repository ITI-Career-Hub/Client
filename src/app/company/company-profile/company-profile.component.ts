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

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  eventData: MatTableDataSource<Object[]>;
  trackData: MatTableDataSource<Object[]>;
  companyData: MatTableDataSource<Object[]>;

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

  eventColumns = ['eventName', 'startDate', 'endDate', 'branch'];
  trackColumns = ['track', 'discipline', 'supervisor', 'students', 'edit'];
  companyColumns = ['companyName', 'edit'];



  // dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<Object[]>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private readonly trackService: TrackService, private readonly companyService: CompanyService, private readonly dataService: DataService, public dialog: MatDialog, private eventService: EventService) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    // this.selection = new SelectionModel<UserData>(true, []);

    this.eventService.getEvents().subscribe((response) => {
      this.eventData = response
      this.eventData = new MatTableDataSource(response);
      this.selection = new SelectionModel<Object[]>(true, []);
      console.log(this.eventData)
    }, (error) => {
      console.log(error)
    })

    this.companyService.getAllCompanies().subscribe((response) => {
      this.companyData = response
      console.log(this.companyData)
    }, (error) => {
      console.log(error)
    })


    this.trackService.getEvents().subscribe((response) => {
      this.trackData = response
      console.log(this.trackData)
    }, (error) => {
      console.log(error)
    })
  }

  ngAfterViewInit() {
    this.eventData.paginator = this.paginator;
    this.eventData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.eventData.filter = filterValue.trim().toLowerCase();
    if (this.eventData.paginator) {
      this.eventData.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.eventData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.eventData.data.forEach(row => this.selection.select(row));
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


}
