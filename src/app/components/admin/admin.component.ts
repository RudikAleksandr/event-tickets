import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private asideLinks: Array<Object> = [
    {link: 'events', value: 'Events'},
    {link: 'orders', value: 'Orders'},
    {link: 'calendar', value: 'Calendar'},
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
