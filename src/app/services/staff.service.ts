import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  public validateToken(token: string): Observable<any> {
    const apiUrl = `${api}/staff/validate?token=${token}`;

    return this.httpClient.post<any>(apiUrl, token);
  }


  registerFullStaffInfo(token: string, data: any): Observable<any> {
    const urlAPI = `${api}/staff/register?token=${token}`;
    return this.httpClient.post(urlAPI, data);
  }

  createStaff(data: any): Observable<any> {
    const urlAPI = `${api}/register/staff`;
    return this.httpClient.post(urlAPI, data);
  }

  getAllStaffInDepartment(): Observable<any> {
    const urlAPI = `${api}/staff`;
    return this.httpClient.get(urlAPI);
  }

}
