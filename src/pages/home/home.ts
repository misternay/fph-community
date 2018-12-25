import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    private isPressBtn = true;
    private wordRandom = '';

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    ionViewDidEnter() {
        this.randomWord()
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

    randomWording(): string {
        return this.wordRandom;
    }

    private randomWord() {
        const listWording = ['ร่วมด้วย ช่วยเหลือกัน', 'ทุกคนเป็นเพื่อนร่วมโลก', 'พรุ่งนี้จะดีกว่าเสมอ', 'ทำทุกวันให้มีคุณค่า']
        const random = Math.floor(Math.random() * 3) + 0;
        this.wordRandom = listWording[random]
    }

    goToMissingList() {
        this.navCtrl.push('MissingListPage');
    }

    goToFeedNewspage() {
        if (this.setIsPressBtn()) { return; }
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
