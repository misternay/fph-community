import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    selectSegment(event) {
        alert('I AM ' + event.value)
    }

    logout() {
        alert('Logout');
        this.navCtrl.setRoot('LoginPage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 })
    }

    goToMissingList() {
        this.navCtrl.push('MissingListPage');
    }

    goToFeedNewspage() {
        this.navCtrl.push('FeedNewsPage', {}, { animate: true, direction: "forward", animation: "md-transition" });
    }

    goToSearchPage() {
        this.navCtrl.push('SearchPage', {}, { animate: true, direction: "forward", animation: "md-transition" });
    }
}
