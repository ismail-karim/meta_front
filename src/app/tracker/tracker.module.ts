import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class TrackerModule { }
