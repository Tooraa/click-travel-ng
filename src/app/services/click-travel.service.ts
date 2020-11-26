import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClickTravelService {
  constructor(private http: HttpClient) {}

  getDreamDestinations() {
    return this.http
      .get<[IDestination]>('https://travel-api.clicksomeone.com/destinations')
      .pipe(map((e) => e.filter((v) => v.isDreamDestination == true)));
  }

  getTicketsToDestination(code) {
    return this.http.get<[ITicket]>(
      'https://travel-api.clicksomeone.com/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22' +
        code +
        '%22%20%7D%0A%7D'
    );
  }
}

export interface IDestination {
  name: string;
  code: string;
  weather: string;
  isDreamDestination: boolean;
}

export interface ITicket {
  passenger: string;
  flight: string;
  from: string;
  to: string;
  class: string;
  gate: string;
  time: string;
  seat: string;
  number: number;
}
