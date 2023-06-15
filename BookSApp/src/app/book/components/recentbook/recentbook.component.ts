import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../BookModel/book.Model';

@Component({
  selector: 'app-recentbook',
  templateUrl: './recentbook.component.html',
  styleUrls: ['./recentbook.component.scss']
})
export class RecentbookComponent implements OnInit {

  recentBook:BookModel[] = [];
  /**
   *
   */
  constructor(private bookservice:BookService) { 
  }
  ngOnInit(): void {
    this.recentBook = this.bookservice.getRecentBook();
  }
}
