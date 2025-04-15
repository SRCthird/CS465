import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Trip from '../models/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    const url = 'https://localhost:8080/api/travel';

    return this.http.get<Trip[]>(url);
  }
}
