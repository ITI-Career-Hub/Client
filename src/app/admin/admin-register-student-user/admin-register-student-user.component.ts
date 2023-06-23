import { Component, OnInit, ViewChild, inject } from '@angular/core';

import { DepartmentService } from 'src/app/services/department.service';



@Component({
  selector: 'app-admin-register-student-user',
  templateUrl: './admin-register-student-user.component.html',
  styleUrls: ['./admin-register-student-user.component.scss']
})



export class AdminRegisterStudentUserComponent implements OnInit {


  constructor(private departmentService: DepartmentService) {

  }

  intakeNum: number;
  email: string;
  username: string;

  departments = []
  token;
  selectedValue: string;


  public fetchDepartmentData(): void {
    this.departmentService.fetchData().subscribe(
      (data: any) => {
        console.log(data)
        this.departments = data;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  registerNewStudent() {
    const data = {
      username: this.username,
      intakeNumber: this.intakeNum,
      email: this.email,
      departmentId: this.selectedValue["id"]
    };

    this.departmentService.postData(data).subscribe(
      (response) => {
        console.log('POST request successful', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );
    console.log(
      this.intakeNum + " " + this.email + " " + this.username + " " + this.selectedValue["id"]
    )
  }






  ngOnInit() {
    this.fetchDepartmentData()
  }

}
