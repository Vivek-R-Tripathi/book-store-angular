import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  Id:number = 0;
  /**
   *
   */
  constructor(private route : ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
        this.route.firstChild?.params.subscribe((param)=> {
          this.Id = param['id'];

          console.log(this.Id);
        })
}
}
