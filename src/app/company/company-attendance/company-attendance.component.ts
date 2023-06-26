import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyAttendaceService } from 'src/app/services/companyAttendace.service';

@Component({
  selector: 'app-company-attendance',
  templateUrl: './company-attendance.component.html',
  styleUrls: ['./company-attendance.component.scss']
})
export class CompanyAttendanceComponent implements OnInit {

  waitingStudents = [];
  doneStudents = [];
  src = '';
  eventId: number;
  constructor(private route: ActivatedRoute, private companyAttendaceService: CompanyAttendaceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
    })


    this.companyAttendaceService.getAttendece(this.eventId).subscribe(
      (response) => {
        response.forEach(e => {
          if (e.attendanceStatus == 'PENDING') {
            this.waitingStudents.push(e);
          } else {
            this.doneStudents.push(e);
          }
        });

        this.src = this.waitingStudents[0] ? this.waitingStudents[0].studentResumeUrl : 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';


        console.log(this.waitingStudents);
        console.log(this.doneStudents);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  chooseStudent(student) {
    this.src = student.studentResumeUrl;
    console.log("jkhjkh")
  }

  updateUuserStatus(attendance) {
    this.companyAttendaceService.updateAttendanceStatus(attendance.id, 'COMPLETED').subscribe(
      (response) => {

        console.log(response);

        this.waitingStudents = this.waitingStudents.filter(obj => obj.id !== attendance.id);
        this.doneStudents.push(attendance)
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

}
