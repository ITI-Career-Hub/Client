import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  public validateToken(token: string): Observable<any> {
    const apiUrl = `http://localhost:9090/company/validate?token=${token}`;

    return this.httpClient.post<any>(apiUrl, token);
  }


  registerFullCompanyInfo(token: string, data: any): Observable<any> {
    const urlAPI = `http://localhost:9090/company/register?token=${token}`;
    return this.httpClient.post(urlAPI, data);
  }

  createCompany(data: any): Observable<any> {
    const urlAPI = 'http://localhost:9090/register/company';
    return this.httpClient.post(urlAPI, data);
  }
}
