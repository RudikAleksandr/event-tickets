import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../../components/admin/admin.component';
import { EventContentComponent } from 'src/app/components/event-content/event-content.component';
import { EventsListComponent } from 'src/app/components/events-list/events-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    EventContentComponent,
    EventsListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
