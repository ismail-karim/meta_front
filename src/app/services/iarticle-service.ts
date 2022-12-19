import { InjectionToken } from "@angular/core";
import { Article } from "../models/article";

export interface IArticleService {

    getArticles(): Promise<Array<Article>>;

    getArticleByID(id: string): Promise<Article>;

    updateArtile(id: string): Promise<Article>;

    deleteArticle(id: string): Promise<Article>;
}

export const IArticleProvider = new InjectionToken<IArticleService>('iarticle-service.ts');
