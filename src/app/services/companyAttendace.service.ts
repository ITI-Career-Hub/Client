import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyAttendaceService {

  constructor(private httpClient: HttpClient) { }

  getAttendece(id): Observable<any>{
    const urlAPI = `${api}/appointments/${id}/attendance`;
    return this.httpClient.get(urlAPI);
  }

  updateAttendanceStatus(userId,stauts){
    console.log(userId,"dasd")
    const urlAPI = `${api}/appointments/attendance/${userId}?newStatus=${stauts}`;
    return this.httpClient.put(urlAPI,{});
  }
}
