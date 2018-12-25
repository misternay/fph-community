import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockFeedNews } from './feed-news-mock-data';
@IonicPage()
@Component({
    selector: 'page-feed-news',
    templateUrl: 'feed-news.html',
    providers: [
        MockFeedNews
    ]
})
export class FeedNewsPage {

    catList = this.getMockCatList.getMockData();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private getMockCatList: MockFeedNews
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedNewsPage');
    }

    goToHomePage() {
        this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 });
    }
}
