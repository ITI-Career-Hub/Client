import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }
  public fetchData(): Observable<any> {
    const apiUrl = 'http://localhost:9090/department'; // Replace with your API endpoint

    return this.http.get<any>(apiUrl);
  }


  postData(data: any): Observable<any> {
    const url = 'http://localhost:9090/register/student';
    return this.http.post(url, data);
  }

}
