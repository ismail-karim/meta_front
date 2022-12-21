import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageArticlesModule } from './manage-articles/manage-articles.module';
import { TrackerComponent } from './tracker.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    FontAwesomeModule,
    ManageArticlesModule
  ],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [
    TrackerComponent,
    SidebarComponent
  ]
  
})
export class TrackerModule { }
