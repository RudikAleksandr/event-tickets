import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private asideLinks: Array<string> = ['Events', 'Orders', 'Calendar'];
  private eventCategories: Array<string> = ['All events', 'Сoncert', 'Food', 'Business', 'Theater'];
  constructor() {

  }

  ngOnInit() {
  }

}
