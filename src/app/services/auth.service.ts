import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api, authAPI } from '../../../constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);

    console.log('decodedCookie', document.cookie)


    const cookieArray = decodedCookie.split(";");
    console.log('cookieArray', cookieArray)

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }

    return "";
  }

  public async logout() {
    const apiUrl = `${authAPI}/logout`;
    let headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`).set('Cookie', `JSESSIONID=${this.getCookie('JSESSIONID')}`);
    console.log(this.getCookie('JSESSIONID'))
    await this.httpClient.post<any>(apiUrl, {}, { headers }).subscribe(
      (response) => {
        console.log('g', response)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('role');
        localStorage.removeItem('isLoggedin');
      },
      (error) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('role');
        localStorage.removeItem('isLoggedin');
        return 1;
      }
    );
  }



}
