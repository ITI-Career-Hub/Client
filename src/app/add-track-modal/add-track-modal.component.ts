import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { DisciplineService } from '../services/discipline.service';
import { StaffService } from '../services/staff.service';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-add-track-modal',
  templateUrl: './add-track-modal.component.html',
  styleUrls: ['./add-track-modal.component.scss']
})
export class AddCompanyModalComponent implements OnInit {
  track: string;
  formData: any = {};
  discipines: any[];
  staff: any[];
  selectedStudents: string[] = [];

  trackName;
  discipline;
  staffId;

  constructor(private trackService: TrackService, private disciplineService: DisciplineService, private staffService: StaffService) { }

  ngOnInit(): void {
    this.getDiscipines();
    this.loadStaff();
  }

  getDiscipines() {
    this.disciplineService.getDiscipline().subscribe(
      (response) => {
        this.discipines = response.map(item => {
          return { key: item, value: item.replace(/_/g, ' ') }
        });

        console.log(this.discipines)
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  handelTracks(disciplineId: any) {
    this.discipline = disciplineId
    console.log(disciplineId)
  }

  handelStaff(disciplineId: any) {
    this.staffId = disciplineId
  }


  loadStaff() {
    this.staffService.getAllStaffInDepartment().subscribe(
      (response) => {
        this.staff = response;
        console.log(this.staff)
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
  saveEvent() {
    const postData = {
      departmentName: this.trackName,
      discipline: this.discipline,
      managerId: this.staffId,
    };
    console.log(postData)


    this.trackService.createTrack(postData).subscribe((response) => {
      console.log(response)
    }, (error) => { console.log(error) })

    // Replace 'your_api_endpoint' with your actual API endpoint
    // this.disciplineService.saveTrack('your_api_endpoint', postData).subscribe(
    //   (response) => {
    //     // Handle success response
    //     console.log('Track saved successfully:', response);
    //   },
    //   (error) => {
    //     // Handle error response
    //     console.error('Error saving track:', error);
    //   }
    // );
  }
}