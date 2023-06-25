import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class AppointemtService {
  constructor(private http: HttpClient) { }

  public getInterviews(eventId: number, companyId: number) {
    const urlAPI = `${api}/appointments/event/${eventId}/company/${companyId}`
    return this.http.get(urlAPI)
  }

  public getAdminInterviews(eventId: number) {
    const urlAPI = `${api}/appointments/event/${eventId}`
    return this.http.get(urlAPI)
  }

  public getStaffInterviews(eventId: number, departmentId: number) {
    const urlAPI = `${api}/department/${departmentId}/event/${eventId}/appointment`
    return this.http.get(urlAPI)
  }
}
