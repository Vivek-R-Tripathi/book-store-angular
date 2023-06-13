import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

 public Id:string='';
  /**
   *
   */
  // Using this ActivatedRoute we can inject this and in the constructor we can get this value related to ActivatedRoute
  // Activated route and since its a type of subject behaviour we need to subscribe this value
  constructor(private route : ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    console.log(this.route);
    // Here we are subscribing the params to get values
    this.route.params.subscribe((data)=>{
    this.Id = data['id'];
      //
    })
  }

}
