import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddModalComponent } from 'src/app/add-modal/add-modal.component';
import { AddCompanyModalComponent } from 'src/app/add-track-modal/add-track-modal.component';
import { CompanyService } from 'src/app/services/company.service';
import { EventService } from 'src/app/services/event.service';
import { TrackService } from 'src/app/services/track.service';
import { DataService } from '../tables/data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentService } from 'src/app/services/student.service';
import { StaffService } from 'src/app/services/staff.service';


@Component({
  selector: 'app-admin-staff-student',
  templateUrl: './admin-staff-student.component.html',
  styleUrls: ['./admin-staff-student.component.scss']
})
export class AdminStaffStudentComponent implements OnInit {

  // eventData: MatTableDataSource<Object[]>;
  // trackData: MatTableDataSource<Object[]>;
  // companyData: MatTableDataSource<Object[]>;

  staffData: MatTableDataSource<Object[]>;
  studentsData: MatTableDataSource<Object[]>;

  userInfo: any;
  name: string;
  eventCount: number;
  staffCount: number;
  studentCount: number;

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

  // eventColumns = ['eventName', 'startDate', 'endDate', 'branch'];
  // trackColumns = ['track', 'discipline', 'supervisor', /*'students',*/ 'edit'];
  // companyColumns = ['companyName', 'edit'];


  staffColumns = ['username', 'email', 'role', 'firstName', 'lastName', 'departmentName']
  studentColumns = ['email', 'firstName', 'lastName', 'college', 'phoneNumber', 'intakeNumber', 'graduationYear']



  // dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<Object[]>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router,
    private readonly trackService: TrackService, private readonly companyService: CompanyService,
    private readonly dataService: DataService, public dialog: MatDialog,
    private eventService: EventService,
    private studentService: StudentService, private staffService: StaffService
  ) { }


  redirectToLink() {
    const link = '/company/register'; // Replace with the desired link
    this.router.navigateByUrl(link);
  }

  onRowClick(row: any) {
    const clickedRowId = row.id; // Replace 'id' with the actual property name containing the ID
    console.log("Clicked " + clickedRowId)
    console.log(row)
  }


  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    // this.selection = new SelectionModel<UserData>(true, []);

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.studentService.getStudentsInDepartment(id).subscribe((response) => {
        console.log("STUDDDDDENT")
        console.log(response)
        this.studentsData = response
        this.studentCount = response.length
      },
        (error) => {
          console.log(error)
        }
      )

      this.staffService.getStaffInDepartment(id).subscribe((response) => {
        console.log("STAFFFFFF")
        console.log(response)
        this.staffData = response
        this.staffCount = response.length
      },
        (error) => {
          console.log(error)
        }
      )

    });



    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.image = this.userInfo["pictureUrl"]
    this.name = this.userInfo["username"]
  }

  ngAfterViewInit() {
    this.staffData.paginator = this.paginator;
    this.staffData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.staffData.filter = filterValue.trim().toLowerCase();
    if (this.staffData.paginator) {
      this.staffData.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.staffData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.staffData.data.forEach(row => this.selection.select(row));
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
