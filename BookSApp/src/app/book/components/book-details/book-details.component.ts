import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

 public Id:string='';
  constructor(private route : ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
    this.Id = data['id'];
    })
  }

}
