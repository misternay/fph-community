import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-photo',
  templateUrl: 'list-photo.html'
})
export class ListPhotoComponent {
  @Input() catImage: string;
  @Input() catName: string;
  text: string;

  constructor() {
    console.log('Hello ListPhotoComponent Component');
    this.text = 'Hello World';
  }

}
