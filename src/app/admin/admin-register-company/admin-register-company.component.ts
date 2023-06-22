import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-admin-register-company',
  templateUrl: './admin-register-company.component.html',
  styleUrls: ['./admin-register-company.component.scss']
})
export class AdminRegisterCompanyComponent implements OnInit {

  email: string;
  username: string;


  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  registerNewCompany() {
    const data = {
      email: this.email,
      username: this.username
    }
    this.companyService.createCompany(data).subscribe(
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

}
