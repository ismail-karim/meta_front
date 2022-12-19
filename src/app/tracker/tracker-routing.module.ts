import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { TrackerComponent } from './tracker.component';

const routes: Routes = [
    {path: '', component: TrackerComponent},
    {path: 'manage-articles', loadChildren: () => import('./manage-articles/manage-articles.module').then(m => m.ManageArticlesModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
