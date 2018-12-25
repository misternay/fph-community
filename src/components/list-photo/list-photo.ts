import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface ListPhotoModel {
    name: string;
    image: string;
    detail: string;
}
@Component({
    selector: 'list-photo',
    templateUrl: 'list-photo.html'
})
export class ListPhotoComponent {
    @Input() catList: ListPhotoModel[];
    text: string;
    isNotMatchAnyInDatabase: boolean = true;

    constructor(public navCtrl: NavController) {
        console.log('Hello ListPhotoComponent Component');
        this.text = 'Hello World';
    }
    goToDetailPage(data: ListPhotoModel) {
        console.log(data)
        this.navCtrl.push('FeedNewsDetailPage', { dataDetail: data });
    }
}
