import { Injectable } from '@angular/core';
import { BookModel } from '../BookModel/book.Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // this is responsible for dependencies now this service is
                     // applicable at root level of this project.
})
export class BookService {  
  //export means it shd be ready to use for import in other components

  /**
   *
   */
 

  // private allBooks = [{
  //   "id": 1,
  //   "author": "Chinua Achebe",
  //   "country": "Nigeria",
  //   "imageLink": "images/things-fall-apart.jpg",
  //   "language": "English",
  //   "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
  //   "pages": 209,
  //   "title": "Things Fall Apart",
  //   "year": 1958,
  //    "price": {
  //       "currency":"USDoller",
  //       "value" : 29
  //    },
  //    "isPublished":true,
  //    "publisheddate": new Date(),
  //    "authors":[]

  // },
  // {
  //   "id": 2,
  //   "author": "Hans Christian Andersen",
  //   "country": "Denmark",
  //   "imageLink": "images/fairy-tales.jpg",
  //   "language": "Danish",
  //   "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
  //   "pages": 784,
  //   "title": "Fairy tales",
  //   "year": 1836,
  //    "price": {
  //       "currency":"INR",
  //       "value" : 29
  //    },
  //    "isPublished":true,
  //    "publisheddate": new Date(),
  //    "authors":[]
  // },
  // {
  //   "id":3,
  //   "author": "Dante Alighieri",
  //   "country": "Italy",
  //   "imageLink": "images/the-divine-comedy.jpg",
  //   "language": "Italian",
  //   "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
  //   "pages": 928,
  //   "title": "The Divine Comedy",
  //   "year": 1315,
  //   "price": {
  //     "currency":"Diram",
  //     "value" : 559
  //  },
  //  "isPublished":true,
  //  "publisheddate": new Date(),
  //  "authors":[]
  // },
  // {
  //   "id":4,
  //   "author": "Unknown",
  //   "country": "Sumer and Akkadian Empire",
  //   "imageLink": "images/the-epic-of-gilgamesh.jpg",
  //   "language": "Akkadian",
  //   "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
  //   "pages": 160,
  //   "title": "The Epic Of Gilgamesh",
  //   "year": -1700,
  //   "price": {
  //     "currency":"KEN",
  //     "value" : 21
  //  },
  //  "isPublished":true,
  //  "publisheddate": new Date(),
  //  "authors":[]
  // },
  // {
  //   "id":5,
  //   "author": "Unknown",
  //   "country": "Achaemenid Empire",
  //   "imageLink": "images/the-book-of-job.jpg",
  //   "language": "Hebrew",
  //   "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
  //   "pages": 176,
  //   "title": "The Book Of Job",
  //   "year": -600,
  //   "price": {
  //     "currency":"African",
  //     "value" : 121
  //  },
  //  "isPublished":true,
  //  "publisheddate": new Date(),
  //  "authors":[]
  // },
  // {
  //   "id":6,
  //   "author": "Unknown",
  //   "country": "India/Iran/Iraq/Egypt/Tajikistan",
  //   "imageLink": "images/one-thousand-and-one-nights.jpg",
  //   "language": "Arabic",
  //   "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
  //   "pages": 288,
  //   "title": "One Thousand and One Nights",
  //   "year": 1200,
  //   "price": {
  //     "currency":"INR",
  //     "value" : 21
  //  },
  //  "isPublished":true,
  //  "publisheddate": new Date(),
  //  "authors":[]
  // }];
  constructor(private httpClient:HttpClient) { }

addBooks(bookModel:BookModel): Observable<BookModel>
{
  return this.httpClient.post<BookModel>('https://localhost:7052/api/Book',bookModel);
}


  getAllBook(): Observable< BookModel[]>{

   // return this.allBooks;
   return this.httpClient.get<BookModel[]>('https://localhost:7052/api/Book');
  }

  getRecentBook(): BookModel[]{

    return [
    {
      "id":6,
      "author": "Devansh Tripathi",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200,
      "price": {
        "currency":"INR",
        "value" : 21
     },
     "isPublished":true,
     "publisheddate": new Date(),
     "authors":[]
    }, {
      "id": 2,
      "author": "Chunnu Tripathi",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836,
       "price": {
          "currency":"INR",
          "value" : 29
       },
       "isPublished":true,
       "publisheddate": new Date(),
       "authors":[]
    }];
  }
}
