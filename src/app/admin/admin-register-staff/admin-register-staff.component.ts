import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

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

  constructor(private departmentService: DepartmentService) {

  }

  ngOnInit(): void {
    this.fetchDepartmentData()
  }

  registerNewStudent() { }

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
