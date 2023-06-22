import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';



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

  constructor(private route: ActivatedRoute, private staffService: StaffService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.validateToken()
  }


  validateToken() {
    this.staffService.validateToken(this.token).subscribe(
      (response) => {
        this.email = response["email"]
        console.log('valid token', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );
  }

  createStaff() {
    const data = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.staffService.registerFullStaffInfo(this.token, data).subscribe(
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

}


