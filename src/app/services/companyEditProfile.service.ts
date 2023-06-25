import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyEditProfileService {

  constructor(private http: HttpClient) { }
 
  public updateCompany(company: any): Observable<any> {
    const apiUrl = `${api}/company/${company.id}`;
    return this.http.put<any>(apiUrl, company);
  }


}
