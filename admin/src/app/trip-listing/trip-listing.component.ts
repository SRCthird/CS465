import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import trips from '../data/trip.json';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent {
  trips: Array<any> = trips;

  constructor() {}

  ngOnInit(): void {

  }
}
