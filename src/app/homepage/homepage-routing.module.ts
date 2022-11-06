import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataComponent } from './data/data.component';
import { HomepageComponent } from './homepage.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { ScienceComponent } from './science/science.component';
import { ServiceComponent } from './service/service.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
    {path: 'home', component: HomepageComponent},
    {path: 'product', component: ProductComponent},
    {path: 'services', component: ServiceComponent},
    {path: 'science', component: ScienceComponent},
    {path: 'virmode', component: ToolsComponent},
    {path: 'data', component: DataComponent},
    {path: 'news', component: NewsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
