import { Component } from '@angular/core';

@Component({
  selector: 'list-photo',
  templateUrl: 'list-photo.html'
})
export class ListPhotoComponent {

  text: string;

  constructor() {
    console.log('Hello ListPhotoComponent Component');
    this.text = 'Hello World';
  }

}
