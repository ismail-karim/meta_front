/**
 * A service calss 
 * @implement IArticleService
 * @usage
 * ```
 * constructor(
    @Inject(IArticleProvider) private articleService: ArticleService,
  ) { }
 * ```
 */
import {  Injectable } from '@angular/core';
import { Article } from '../models/article';
import { IArticleService } from './iarticle-service';

@Injectable({
  providedIn: 'root'
})


export class ArticleService implements IArticleService {

  constructor() { }
  


  /**
   * 
   */
  public getArticles(): Promise<Array<Article>> {
    try {
      
    } catch (error) {
      
    }
    throw new Error('Method not implemented.');
  }

  /**
   * 
   * @param id 
   */
  public getArticleByID(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


  /**
   * 
   * @param id 
   */
  public updateArtile(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


  /**
   * 
   * @param id 
   */
  public deleteArticle(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


 
}
