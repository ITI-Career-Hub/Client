import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class StudentEditProfileService {

  constructor(private http: HttpClient) { }
 
  public updateStudent(user: any): Observable<any> {
    const apiUrl = `${api}/student/${user.id}`;
    return this.http.put<any>(apiUrl, user);
  }


}
