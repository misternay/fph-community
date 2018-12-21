import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    private isPressBtn = true;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    selectSegment(event) {
        alert('I AM ' + event.value)
    }

    logout() {
        alert('Logout');

        if (this.setIsPressBtn()) { return; }
        this.navCtrl.setRoot('LoginPage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 }).then(
            () => {
                this.isPressBtn = true;
            }
        )
    }

    goToMissingList() {
        this.navCtrl.push('MissingListPage');
    }

    goToFeedNewspage() {
        if (this.isPressBtn) { return; }
        this.navCtrl.push('FeedNewsPage', {}, { animate: true, direction: "forward", animation: "md-transition" }).then(
            () => {
                this.isPressBtn = true;
            }
        );
    }

    goToSearchPage() {
        if (this.setIsPressBtn()) { return; }
        this.navCtrl.push('SearchPage', {}, { animate: true, direction: "forward", animation: "md-transition" }).then(
            () => {
                this.isPressBtn = true;
            }
        );
    }

    private setIsPressBtn(): boolean {
        if (!this.isPressBtn) { return true; }
        this.isPressBtn = false;
        return false;
    }
}
