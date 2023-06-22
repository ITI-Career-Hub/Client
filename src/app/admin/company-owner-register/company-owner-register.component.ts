import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'country-list';
import * as countryList from 'country-list';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-owner-register',
  templateUrl: './company-owner-register.component.html',
  styleUrls: ['./company-owner-register.component.scss']
})
export class CompanyOwnerRegisterComponent implements OnInit {

  token: string;

  companyName: string;
  email: string;
  description: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  state: string;

  selectedCountry: string;
  countries: { name: string, flag: string }[];


  constructor(private route: ActivatedRoute, private companyService: CompanyService) {

    this.countries = countryList.getData().map((country: Country) => {
      return {
        name: country.name,
        flag: `https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`
      };
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.registerNewStudent()
  }


  registerNewStudent() {
    this.companyService.validateToken(this.token).subscribe(
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

  registerCompany() {
    const data = {
      password: this.password,
      companyName: this.companyName,
      description: this.description,
      // "technologies": [
      //   "string"
      // ],
      country: this.selectedCountry,
      state: this.state,
      city: this.city,
      street: this.street
    }

    this.companyService.registerFullCompanyInfo(this.token, data).subscribe(
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

