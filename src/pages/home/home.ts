import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs';
import { DialogUtilService } from '../../app/util/dialog.util';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    private isPressBtn = true;
    private wordRandom = "";
    imagePath = "";
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private camera: Camera,
        public dialogUtil: DialogUtilService
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

    openCamera() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        console.log(JSON.stringify(options))
        this.getImage(options);
    }

    private getImage(options: CameraOptions) {
        Observable.fromPromise(
            this.camera.getPicture(options)
        ).subscribe(
            imageData => {
                this.dialogUtil.showLoadingDialog();
                this.updateGetImage(imageData);
            }, err => {
                console.log('search error')
            }
        );
    }

    private updateGetImage(imageData: string) {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imagePath = base64Image;
        setTimeout(() => {
            this.dialogUtil.hideLoadingDialog();
        }, 200)
    }
}
