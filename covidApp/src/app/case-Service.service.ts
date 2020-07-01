import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CaseServiceService{
    baseURL = "http://localhost:3000/ps4" 
    constructor(private http: HttpClient){ }
    countryInfo;

    getCasesByCountry(countryCode: string){
        return this.http.post<any>(this.baseURL, {country: countryCode})
    }
}