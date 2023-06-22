import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-admin-register-staff',
  templateUrl: './admin-register-staff.component.html',
  styleUrls: ['./admin-register-staff.component.scss']
})
export class AdminRegisterStaffComponent implements OnInit {

  email: string;
  username: string;
  selectedValue: string;
  departments = []

  constructor(private departmentService: DepartmentService, private staffService: StaffService) {

  }

  ngOnInit(): void {
    this.fetchDepartmentData()
  }

  registerNewStaff() {
    const data = {
      email: this.email,
      username: this.username,
      departmentId: this.selectedValue["id"]
    }
    this.staffService.createStaff(data).subscribe(
      (response) => {
        console.log('valid token', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );

  }

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
}
