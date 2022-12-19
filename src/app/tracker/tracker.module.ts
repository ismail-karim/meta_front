import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageArticlesModule } from './manage-articles/manage-articles.module';


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
  bootstrap: [SidebarComponent]
  
})
export class TrackerModule { }
