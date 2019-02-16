import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed-news-detail',
  templateUrl: 'feed-news-detail.html',
})
export class FeedNewsDetailPage {
  data = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedNewsDetailPage');
    this.data = this.navParams.get('dataDetail')
    console.log('datais', this.data)
  }
  openLocation() {
    this.navCtrl.push('LocationPage', {
      lat: this.data["lat"],
      lng: this.data["lng"]
    })
  }
}
