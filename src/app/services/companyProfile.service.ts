import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  constructor(private httpClient: HttpClient) { }

  getEvents(companyID): Observable<any>{
    const urlAPI = `${api}/company/${companyID}/event`;
    return this.httpClient.get(urlAPI);
  }

}
