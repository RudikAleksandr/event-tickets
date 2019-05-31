import { Component } from '@angular/core';

import config from '../../../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event-tickets';


  load() {
  //   fetch(`${config.URI_LAST_EVENTS}?auth_key=${config.AUTH_KEY}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }).then((response) => {
  //     debugger;
  //     return response.json();
  //   }, (data) => {
  //    debugger;
  //   }).then((data) => {
  //     debugger
  //   });
  }

}
