import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    apiEndpoint = 'http://localhost:9090';

    constructor(private httpClient: HttpClient) { }

    public getStudentsInterviews(userId): Observable<any> {
        const apiUrl = `${this.apiEndpoint}/appointments/attendance/student/${userId}`;
        return this.httpClient.get<any>(apiUrl);
    }



}
