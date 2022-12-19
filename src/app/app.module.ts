import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageModule } from './homepage/homepage.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrackerComponent } from './tracker/tracker.component';
import { LoginComponent } from './auth-pages/login/login.component';
import { TrackerModule } from './tracker/tracker.module';
import { AuthPagesModule } from './auth-pages/auth-pages.module';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotfoundComponent,
    TrackerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    TrackerModule,
    AuthPagesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
