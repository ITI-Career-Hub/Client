import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-admin-register-company',
  templateUrl: './admin-register-company.component.html',
  styleUrls: ['./admin-register-company.component.scss']
})
export class AdminRegisterCompanyComponent implements OnInit {

  email: string;
  username: string;


  constructor(private route: Router, private companyService: CompanyService) { }

  ngOnInit(): void {

  }

  registerNewCompany() {
    const data = {
      email: this.email,
      username: this.username
    }
    console.log("first")
    this.companyService.createCompany(data).subscribe(

      (response) => {
        console.log("second")
        this.email = response["email"]
        console.log('valid token', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );
    this.route.navigateByUrl("/admin/profile")

  }

}
