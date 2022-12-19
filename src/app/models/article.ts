import { IArticle } from "./iarticle";

export class Article implements IArticle {
    private id!: string;
    private title!: string;
    private img!: string;
    private date!: string;
    private author!: string;
    private resume!: string;
    private body!: string;

    constructor(){}

    /**
     * Function return Id of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getId();
     * ```
     * @returns string containt id
     */
    public getId(): string
    {
        return this.id;
    }

    /**
     * Function return title of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getTitle();
     * ```
     * @returns string containt title
     */
    public getTitle(): string
    {
        return this.title
    }

    /**
     * Function return url's img of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getImg();
     * ```
     * @returns string containt URL's img
     */
    public getImg() : string
    {
        return this.img;
    }

    /**
     * Function return date of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getDate();
     * ```
     * @returns string containt date
     */
    public getDate(): string 
    {
        return this.date;
    }

    /**
     * Function return author of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getAuthor();
     * ```
     * @returns string containt author
     */
    public getAuthor(): string 
    {
        return this.author;
    }

    /**
     * Function return resume of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getResume();
     * ```
     * @returns string containt resume
     */
    public getResume(): string 
    {
        return this.resume;
    }

    /**
     * Function return body of object Article
     * @usage
     * ```
     * public aticle = new Article();
     * 
     * this.article.getBody();
     * ```
     * @returns string containt body
     */
    public getBody(): string 
    {
        return this.body;
    }


    /**
     * Function allow to set title of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleTitle: string;
     * 
     * this.article.setTitle(articleTitle);
     * ```
     * @param title 
     */
    public setTitle(title: string): void
    {
        this.title = title;
    }

    /**
     * Function allow to set URL's image of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleImgUrl: string;
     * 
     * this.article.setImg(articleImgUrl);
     * ```
     * @param img 
     */
    public setImg(img: string): void
    {
        this.img = img;
    }

    /**
     * Function allow to set date of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleDate: string;
     * 
     * this.article.setDate(articleDate);
     * ``` 
     * @param date 
     */
    public setDate(date: string): void
    {
        this.date = date;
    }

    /**
     * Function allow to set author of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleAuthor: string;
     * 
     * this.article.setImg(articleAuthor);
     * ```
     * @param author 
     */
    public setAuthor(author: string): void
    {
        this.author = author;
    }

    /**
     * Function allow to set resume of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleResume: string;
     * 
     * this.article.setImg(articleResume);
     * ```
     * @param resume 
     */
    public setResume(resume: string): void 
    {
        this.resume = resume;
    }

    /**
     * Function allow to set body of object Article
     * @usage
     * ```
     * public article: Article = new Article();
     * public articleBody: string;
     * 
     * this.article.setImg(articleBody);
     * ```
     * @param body 
     */
    public setBody(body: string): void 
    {
        this.body = body;
    }
}
