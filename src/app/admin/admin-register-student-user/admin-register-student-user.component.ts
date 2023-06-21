import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';



@Component({
  selector: 'app-admin-register-student-user',
  templateUrl: './admin-register-student-user.component.html',
  styleUrls: ['./admin-register-student-user.component.scss']
})



export class AdminRegisterStudentUserComponent implements OnInit {

  constructor() { }



  onLogin() { }

  selectedValue: string;
  selectedCar: string;

  departments: string[] = [
    'JETS',
    'Network',
    'Cloud',
    'AI'
  ];



  ngOnInit() {

  }

}
