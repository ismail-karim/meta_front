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
  getArticles(): Promise<Array<Article>> {
    try {
      
    } catch (error) {
      
    }
    throw new Error('Method not implemented.');
  }

  /**
   * 
   * @param id 
   */
  getArticleByID(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


  /**
   * 
   * @param id 
   */
  updateArtile(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


  /**
   * 
   * @param id 
   */
  deleteArticle(id: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }


 
}
