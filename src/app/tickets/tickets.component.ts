import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClickTravelService, ITicket } from '../services/click-travel.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  code: string;
  constructor(
    private service: ClickTravelService,
    private route: ActivatedRoute
  ) {}
  tickets: [ITicket];
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.code = params.get('code');
        console.log(this.code);
        this.service.getTicketsToDestination(this.code).subscribe(
          (data) => {
            console.log(data);
            this.tickets = data;
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  }
}
