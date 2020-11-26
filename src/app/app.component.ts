import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickTravelService } from './services/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations;
  destSubscription: Subscription;
  constructor(private clickService: ClickTravelService) {}

  ngOnInit(): void {
    this.clickService.getDreamDestinations().subscribe((data) => {
      this.destinations = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.destSubscription.unsubscribe();
  }
}
