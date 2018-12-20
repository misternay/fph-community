import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockMissingList } from './missing-list-mock-data';

/**
 * Generated class for the MissingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-missing-list',
    templateUrl: 'missing-list.html',
})
export class MissingListPage {

    listItem = MockMissingList.data;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MissingListPage');
    }

    goTOSearchDetail(index: number) {
        console.log(index)
    }

}
