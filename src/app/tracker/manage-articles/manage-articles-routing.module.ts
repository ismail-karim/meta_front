import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { ManageArticlesComponent } from './manage-articles.component';

const routes: Routes = [
  {path: '', component: ManageArticlesComponent},
  {path: ':id', component: ArticleViewerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArticlesRoutingModule { }
