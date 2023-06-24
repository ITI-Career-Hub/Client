import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private httpClient: HttpClient) { }

  // public validateToken(token: string): Observable<any> {
  //   const apiUrl = `${api}/company/validate?token=${token}`;

  //   return this.httpClient.post<any>(apiUrl, token);
  // }


  getEvents(): Observable<any> {
    const urlAPI = `${api}/department`;
    return this.httpClient.get(urlAPI);
  }

}
