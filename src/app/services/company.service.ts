import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  public validateToken(token: string): Observable<any> {
    const apiUrl = `${api}/company/validate?token=${token}`;

    return this.httpClient.post<any>(apiUrl, token);
  }

  registerFullCompanyInfo(token: string, data: any): Observable<any> {
    const urlAPI = `${api}/company/register?token=${token}`;
    return this.httpClient.post(urlAPI, data);
  }

  createCompany(data: any): Observable<any> {
    const urlAPI = `${api}/register/company`;
    return this.httpClient.post(urlAPI, data);
  }

  getAllCompanies(): Observable<any> {
    const urlAPI = `${api}/company`;
    return this.httpClient.get(urlAPI);
  }

  getPendingCompanyInterviews() { }

  getScheduledCompanyInterviews() { }

}
