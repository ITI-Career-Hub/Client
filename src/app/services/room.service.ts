import { Injectable } from '@angular/core';
import { api } from '../../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  public getAvailableRoom(date: any) {
    const urlAPI = `${api}/room/available?date=${date}`;
    return this.http.get(urlAPI);
  }
}
