import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  public validateToken(token: string): Observable<any> {
    const apiUrl = `http://localhost:9090/student/validate?token=${token}`;

    return this.http.post<any>(apiUrl, token);
  }

  public createStudent(data: any, token: string): Observable<any> {
    const apiUrl = `http://localhost:9090/student/register?token=${token}`;

    return this.http.post<any>(apiUrl, data);
  }

}
