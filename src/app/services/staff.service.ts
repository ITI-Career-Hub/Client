import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  public validateToken(token: string): Observable<any> {
    const apiUrl = `http://localhost:9090/staff/validate?token=${token}`;

    return this.httpClient.post<any>(apiUrl, token);
  }


  registerFullStaffInfo(token: string, data: any): Observable<any> {
    const urlAPI = `http://localhost:9090/staff/register?token=${token}`;
    return this.httpClient.post(urlAPI, data);
  }

  createStaff(data: any): Observable<any> {
    const urlAPI = 'http://localhost:9090/register/staff';
    return this.httpClient.post(urlAPI, data);
  }
}
