import { PriceModel } from "./price.Model";

export interface BookModel
{
    id:number,
    author:string,
    country: string,
    imageLink:string,
    language:string,
    link: string,
    pages:number,
    title:string,
    year:number,
    price: PriceModel
    
}