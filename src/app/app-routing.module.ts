import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
