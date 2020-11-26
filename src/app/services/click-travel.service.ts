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
}

export interface IDestination {
  name: string;
  code: string;
  weather: string;
  isDreamDestination: boolean;
}
