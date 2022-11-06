import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)},
    {path: 'tracker', loadChildren: () => import('./tracker/tracker.module').then((m) => m.TrackerModule)},
    {path: 'auth', loadChildren: () => import('./auth-pages/auth-pages.module').then((m) => m.AuthPagesModule)},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
