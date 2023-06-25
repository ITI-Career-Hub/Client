import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class StaffEditProfileService {

  constructor(private http: HttpClient) { }
 
  public updateStaff(staff: any): Observable<any> {
    const apiUrl = `${api}/staff/${staff.id}`;
    return this.http.put<any>(apiUrl, staff);
  }


}
