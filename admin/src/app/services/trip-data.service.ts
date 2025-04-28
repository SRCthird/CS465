import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Trip from '../models/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  constructor(private http: HttpClient) { }
  private url = 'https://localhost:8080/api/travel';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  getTrip(code: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + code);
  }

  addTrip(formData: Trip): Observable<Trip[]> {
    return this.http.post<Trip[]>(this.url, formData);
  }

  updateTrip(formData: Trip): Observable<Trip[]> {
    return this.http.put<Trip[]>(this.url + '/' + formData.code, formData)
  }
}
