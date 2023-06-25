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
import { AppointemtService } from 'src/app/services/appointemt.service';


@Component({
  selector: 'app-company-status',
  templateUrl: './company-status.component.html',
  styleUrls: ['./company-status.component.scss']
})
export class CompanyStatusComponent implements OnInit {

  companyScheduledData: any;
  companyPendingData: any;
  // companyData: MatTableDataSource<Object[]>;
  userInfo: any;
  name: string;
  eventCount: number;
  trackCount: number;
  companyCount: number;
  eventName: string;

  constructor(private route: ActivatedRoute, private appointmentService: AppointemtService, private router: Router, private readonly trackService: TrackService, private readonly companyService: CompanyService, private readonly dataService: DataService, public dialog: MatDialog, private eventService: EventService) { }


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

  companyInterviewsColumns = ['track', 'interviewType', 'interviewers', 'date', 'room', 'edit']


  // dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<Object[]>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  redirectToLink() {
    const link = '/company/register'; // Replace with the desired link
    this.router.navigateByUrl(link);
  }

  ngOnInit() {

    // If it is company
    this.route.params.subscribe(params => {
      const eventId = params['eventId'];
      const userData = JSON.parse(localStorage.getItem("userInfo"))
      const companyId = userData["id"];
      const role = userData["roleName"]

      console.log("ID: " + userData["id"])

      this.eventService.getEvent(eventId).subscribe(
        (response) => {
          this.eventName = response["eventName"]
        },
        (error) => {
          console.log(error)
        })

      if (eventId && companyId && role == "COMPANY") {
        console.log("EVent: " + eventId + " Comp : " + companyId)
        this.doCompanyAPICallForInterviews(eventId, companyId)
      } else if (eventId && role == "ADMIN") {
        this.doAdminAPICallForInterviews(eventId)
      }

    });



    // this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    // this.selection = new SelectionModel<UserData>(true, []);

    // this.eventService.getEvents().subscribe((response) => {
    //   this.eventData = response
    //   this.eventData = new MatTableDataSource(response);
    //   this.selection = new SelectionModel<Object[]>(true, []);
    //   console.log(this.eventData)
    //   this.eventCount = response.length
    // }, (error) => {
    //   console.log(error)
    // })

    // this.companyService.getAllCompanies().subscribe((response) => {
    //   this.companyData = response
    //   console.log(this.companyData)
    //   this.companyCount = response.length
    // }, (error) => {
    //   console.log(error)
    // })


    // this.trackService.getEvents().subscribe((response) => {
    //   this.trackData = response
    //   console.log(this.trackData)
    //   this.trackCount = response.length
    // }, (error) => {
    //   console.log(error)
    // })


  }


  doCompanyAPICallForInterviews(evenId: number, companyId: number) {
    this.appointmentService.getInterviews(evenId, companyId).subscribe((response) => {
      console.log("111.. Event Response:: ")
      console.log(response)
      // this.companyScheduledData = response
      const allData: any = response
      this.companyScheduledData = allData.filter((data) => data["appointmentDate"] != null)
      this.companyPendingData = allData.filter((data) => data["appointmentDate"] == null)

    }, (error) => {
      console.log(error)
    })
  }


  doAdminAPICallForInterviews(eventId: number) {
    this.appointmentService.getAdminInterviews(eventId).subscribe((response) => {
      console.log("2222..Event Response:: ")
      console.log(response)
      // this.companyScheduledData = response
      const allData: any = response
      this.companyScheduledData = allData.filter((data) => data["appointmentDate"] != null)
      this.companyPendingData = allData.filter((data) => data["appointmentDate"] == null)

    }, (error) => {
      console.log(error)
    })
  }


  ngAfterViewInit() {
    this.companyPendingData.paginator = this.paginator;
    this.companyPendingData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.companyPendingData.filter = filterValue.trim().toLowerCase();
    if (this.companyPendingData.paginator) {
      this.companyPendingData.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.companyPendingData.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.companyPendingData.data.forEach(row => this.selection.select(row));
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
