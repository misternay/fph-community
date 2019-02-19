import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockFeedNews } from './feed-news-mock-data';
import { otherApp } from '../../app/app.component';
import { DialogUtilService } from '../../app/util/dialog.util';
@IonicPage()
@Component({
    selector: 'page-feed-news',
    templateUrl: 'feed-news.html',
    providers: [
        MockFeedNews,
        DialogUtilService
    ]
})
export class FeedNewsPage {

    catList = this.getMockCatList.getMockData();
    feedList: Array<any> = [];
    isFirstComein: boolean = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private getMockCatList: MockFeedNews,
        public dialogUtil: DialogUtilService
    ) {
        this.dialogUtil.showLoadingDialog();
        this.getDataOfMissingDetail().then(() => {
            this.isFirstComein = true;
            this.dialogUtil.hideLoadingDialog()
        }).catch(() => {
            this.isFirstComein = true
            this.dialogUtil.hideLoadingDialog()
        });
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
            this.feedList = [];
            otherDatabase.on('value', resp => {
                resp.forEach(va => {
                    this.feedList.push(va.val())
                });
                resolve();
            });
        });
    }

    doRefresh(refresher) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            this.getDataOfMissingDetail().then(() => refresher.complete())
        }, 2000);
    }
}
