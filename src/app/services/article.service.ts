import { Inject, Injectable } from '@angular/core';
import { Article } from '../models/article';
import { IArticleProvider, IArticleService } from './iarticle-service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements IArticleService {

  constructor(
    @Inject(IArticleProvider) private srcActicleService: IArticleService,
  ) { }


  getArticles(): Promise<Article> {
    try {
      
    } catch (error) {
      
    }
    throw new Error('Method not implemented.');
  }
  updateArtile(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }
  deleteArticle(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


 
}
