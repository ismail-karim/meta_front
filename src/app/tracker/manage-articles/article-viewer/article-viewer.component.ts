import { Component, Inject, Input, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticleProvider } from 'src/app/services/iarticle-service';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.scss']
})
export class ArticleViewerComponent implements OnInit {

  @Input() articleID!: string;

  constructor(
    @Inject(IArticleProvider) private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
  }


  loadData()
  {
    this.articleService.getArticleByID(this.articleID);
  }
  
}
