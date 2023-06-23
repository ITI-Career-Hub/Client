import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }
  public fetchData(): Observable<any> {
    const apiUrl = '${api}/department'; // Replace with your API endpoint

    return this.http.get<any>(apiUrl);
  }


  postData(data: any): Observable<any> {
    const url = '${api}/register/student';
    return this.http.post(url, data);
  }

}
