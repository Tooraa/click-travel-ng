import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private clickService: ClickTravelService,
    private router: Router
  ) {}

  goToTicket(code) {
    this.router.navigateByUrl('/ticket/' + code);
  }

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
