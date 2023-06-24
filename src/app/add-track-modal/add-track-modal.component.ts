import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { DisciplineService } from '../services/discipline.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-add-track-modal',
  templateUrl: './add-track-modal.component.html',
  styleUrls: ['./add-track-modal.component.scss']
})
export class AddCompanyModalComponent implements OnInit {

  src = '';

  discipines = {};
  staff = [];
  trackName = '';
  students = [];
  formData: any = {};
  selectedInterests: string[] = [];
  track: string;
  trackId: number;
  constructor(private disciplineService: DisciplineService, private staffService: StaffService) { }

  ngOnInit(): void {
    this.getDiscipine();
  }

  getDiscipine() {
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

  handelStaff(trackId: number) {
    console.log("STAFFF")
    this.staffService.getAllStaffInDepartment(trackId).subscribe(
      (response) => {
        this.staff = response;
        console.log(response)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

  handelTrackName(track) {
    this.trackName = track.options[track.selectedIndex].text;
    console.log(track.value);
    this.handelStudents(track.value);
  }

  handelStudents(trackId) {
    this.disciplineService.getStudentsByTrack(trackId).subscribe(
      (response) => {
        this.students = response;
        console.log(this.students);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  chooseStudent(student) {
    this.src = student.resumeUrl;
  }

  updateSelectedInterests(checked: boolean, interestId: string) {
    if (checked) {
      this.selectedInterests.push(interestId);
    } else {
      const index = this.selectedInterests.indexOf(interestId);
      if (index !== -1) {
        this.selectedInterests.splice(index, 1);
      }
    }

  }

  addOnBlur = true;
  interviewers: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.interviewers.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    console.log(this.interviewers)
  }

  remove(technology: string): void {
    const index = this.interviewers.indexOf(technology);

    if (index >= 0) {
      this.interviewers.splice(index, 1);
    }

    console.log(this.interviewers)

  }


  save() {
    let interviewData = {
      appointmentName: this.trackName,
      interviewType: this.formData.interviewType,
      interviewers: this.interviewers,
      interviewNotes: this.formData.notes,
      departmentId: this.formData.trackid,
      companyId: 3,
      eventId: 1,
      studentIds: this.selectedInterests
    };


    console.log(interviewData);

    this.disciplineService.ScheduleInterview(interviewData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  saveEvent() { }
}
