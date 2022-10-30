import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { ScienceComponent } from './science/science.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'product', component: ProductComponent},
    {path: 'services', component: ServiceComponent},
    {path: 'science', component: ScienceComponent},
    {path: 'news', component: NewsComponent},
    {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
