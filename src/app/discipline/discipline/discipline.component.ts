import { Component, OnInit } from '@angular/core';
import { DisciplineService } from 'src/app/services/discipline.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit {
  // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  src = '';

  discipines = {};
  tracks = [];
  trackName = '';
  students = [];
  formData: any = {};
  selectedInterests: string[] = [];

  constructor(private disciplineService: DisciplineService) { }

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

  handelTracks(discipline: string) {
    this.disciplineService.getTracksByDiscipline(discipline).subscribe(
      (response) => {
        this.tracks = response;
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

    console.log(this.selectedInterests)

  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
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
    interviewers : this.interviewers,
    interviewNotes :this.formData.notes,
    departmentId:this.formData.trackid,
    companyId:3,
    eventId:1,
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

}
