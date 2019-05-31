import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  private eventCategories: Array<string> = ['All events', 'Сoncert', 'Food', 'Business', 'Theater'];

  constructor() { }

  ngOnInit() {
  }

}
