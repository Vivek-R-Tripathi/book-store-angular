import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-address',
  templateUrl: './author-address.component.html',
  styleUrls: ['./author-address.component.scss']
})
export class AuthorAddressComponent {
  
  @Input()
  address!: string;

}
