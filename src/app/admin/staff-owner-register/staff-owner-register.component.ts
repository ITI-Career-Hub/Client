import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-owner-register',
  templateUrl: './staff-owner-register.component.html',
  styleUrls: ['./staff-owner-register.component.scss']
})
export class StaffOwnerRegisterComponent implements OnInit {
  token: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

  createStaff() { }

}
