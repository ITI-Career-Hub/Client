import { Component, OnInit } from '@angular/core';
import { DisciplineService } from '../services/discipline.service';
import { StaffService } from '../services/staff.service';
import { TrackService } from '../services/track.service';
import { Location } from '@angular/common';

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

  constructor(private location: Location, private trackService: TrackService, private disciplineService: DisciplineService, private staffService: StaffService) { }

  ngOnInit(): void {
    this.getDiscipines();
    this.loadStaff();
  }

  refresh(): void {
    this.location.go(this.location.path());
    window.location.reload();
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
      this.refresh()
    }, (error) => { console.log(error) })

  }
}