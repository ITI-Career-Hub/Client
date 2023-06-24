import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-attendance',
  templateUrl: './company-attendance.component.html',
  styleUrls: ['./company-attendance.component.scss']
})
export class CompanyAttendanceComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
