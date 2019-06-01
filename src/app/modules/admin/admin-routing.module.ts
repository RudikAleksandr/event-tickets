import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../../components/admin/admin.component';
import { EventContentComponent } from 'src/app/components/event-content/event-content.component';
import { EventsListComponent } from 'src/app/components/events-list/events-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'events', component: EventsListComponent},
      {path: 'events/:id', component: EventContentComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
