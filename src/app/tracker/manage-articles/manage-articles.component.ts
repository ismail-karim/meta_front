import { Component, Inject, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticleProvider } from 'src/app/services/iarticle-service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.scss']
})
export class ManageArticlesComponent implements OnInit {

  constructor(
    @Inject(IArticleProvider) private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
  }

}
