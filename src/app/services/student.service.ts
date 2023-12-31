import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  public validateToken(token: string): Observable<any> {
    const apiUrl = `${api}/student/validate?token=${token}`;

    return this.http.post<any>(apiUrl, token);
  }

  public createStudent(data: any, token: string): Observable<any> {
    const apiUrl = `${api}/student/register?token=${token}`;

    return this.http.post<any>(apiUrl, data);
  }


  public studentData(role: any, username: any, token: string): Observable<any> {
    let apiUrl;
    if (role == "admin") {
      apiUrl = `${api}/staff/username/${username}`;
    }
    else {
      apiUrl = `${api}/${role}/username/${username}`;
    }
    return this.http.get<any>(apiUrl);
  }


  public getStudentsInDepartment(id: number): Observable<any> {
    const apiUrl = `${api}/department/${id}/student`
    return this.http.get<any>(apiUrl);
  }


}
