import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { ScienceComponent } from './science/science.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { AboutComponent } from './about/about.component';
import { DataComponent } from './data/data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    NewsComponent,
    ProductComponent,
    ServiceComponent,
    ScienceComponent,
    ToolsComponent,
    AboutComponent,
    DataComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class HomepageModule { }
