import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-own-register',
  templateUrl: './student-own-register.component.html',
  styleUrls: ['./student-own-register.component.scss']
})
export class StudentOwnRegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  token: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  college: string;
  phoneNumber: string;
  graduationYear: number;

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.registerNewStudent();
  }

  registerNewStudent() {
    this.studentService.validateToken(this.token).subscribe(
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


  onLogin() { }

  createUser() {
    const data = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      college: this.college,
      phoneNumber: this.phoneNumber,
      graduationYear: this.graduationYear
    };

    this.studentService.createStudent(data, this.token).subscribe(
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
