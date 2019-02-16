import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockFeedNews } from './feed-news-mock-data';
import { otherApp } from '../../app/app.component';
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
    feedList: Array<any> = [];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private getMockCatList: MockFeedNews
    ) {
        this.getDataOfMissingDetail()
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedNewsPage');
    }

    goToHomePage() {
        this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 });
    }

    getDataOfMissingDetail() {
        return new Promise(resolve => {
            var otherDatabase = otherApp.database().ref("/feednews");
            otherDatabase.on('value', resp => {
                resp.forEach(va => {
                    console.log(va.val())
                    this.feedList.push(va.val())
                });
                resolve();
            });
        });
    }
}
