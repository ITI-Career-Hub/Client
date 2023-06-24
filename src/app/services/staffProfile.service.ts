import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';


@Injectable({
  providedIn: 'root'
})
export class StaffProfileService {

  constructor(private httpClient: HttpClient) { }

  public getStudents(departmentId): Observable<any> {
    const apiUrl = `${api}/student/department/${departmentId}`;
    return this.httpClient.get<any>(apiUrl);
  }

  getEvents(trackId): Observable<any>{
    const urlAPI = `${api}/department/${trackId}/event`;
    return this.httpClient.get(urlAPI);
  }

}
