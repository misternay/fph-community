import { Component, Input } from '@angular/core';

export interface ListPhotoModel {
    name: string;
    image: string;
}
@Component({
    selector: 'list-photo',
    templateUrl: 'list-photo.html'
})
export class ListPhotoComponent {
    @Input() catList: ListPhotoModel[];
    text: string;

    constructor() {
        console.log('Hello ListPhotoComponent Component');
        this.text = 'Hello World';
    }

}
