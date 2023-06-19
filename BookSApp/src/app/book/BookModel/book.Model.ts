import { PriceModel } from "./price.Model";

export class BookModel
{
   public id !:number;
   public author!:string;
   public country !: string;
   public imageLink!:string;
   public language!:string;
   public link!: string;
   public pages!:number;
   public title !:string;
   public year !:number;
   public price !: PriceModel;
   public isPublished !: boolean;
   public publisheddate !:Date;
    
}