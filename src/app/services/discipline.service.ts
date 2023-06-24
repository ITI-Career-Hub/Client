import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DisciplineService {

    apiEndpoint = 'http://localhost:9090';

    constructor(private httpClient: HttpClient) { }

    public getDiscipline(): Observable<any> {
        const apiUrl = `${this.apiEndpoint}/discipline`
        return this.httpClient.get<any>(apiUrl);
    }

    public getTracksByDiscipline(discipline: String): Observable<any> {
        const apiUrl = `${this.apiEndpoint}/department?discipline=${discipline}`;
        return this.httpClient.get<any>(apiUrl);
    }

    getStudentsByTrack(trackId) {
        const apiUrl = `${this.apiEndpoint}/department/${trackId}/student`;
        return this.httpClient.get<any>(apiUrl);
    }

    ScheduleInterview(interviewData) {
        const apiUrl = `${this.apiEndpoint}/appointments`;
        return this.httpClient.post<any>(apiUrl, interviewData);
    }

    public getDepartments(): Observable<any> {
        const apiUrl = `${this.apiEndpoint}/department`
        return this.httpClient.get<any>(apiUrl);
    }


}
