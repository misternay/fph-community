import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-missing-detail',
  templateUrl: 'missing-detail.html',
})
export class MissingDetailPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('peopleDetail')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissingDetailPage');
  }

}
