import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageArticlesRoutingModule } from './manage-articles-routing.module';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { IArticleProvider } from 'src/app/services/iarticle-service';
import { ArticleService } from 'src/app/services/article.service';
import { ManageArticlesComponent } from './manage-articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    ManageArticlesComponent,
    ArticleViewerComponent,
  ],
  imports: [
    CommonModule,
    ManageArticlesRoutingModule,
  ],
  providers: [
    { 
      provide: IArticleProvider,
      useClass: ArticleService
    }
  ]
})
export class ManageArticlesModule { }
