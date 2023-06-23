import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DisciplineService } from 'src/app/services/discipline.service';

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

  handelTrackName(track){
    this.trackName = track.options[track.selectedIndex].text;
    console.log(track.value);
    this.handelStudents(track.value);
  }

  handelStudents(trackId){
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

  chooseStudent(student){
    this.src = student.resumeUrl;
  }

}
