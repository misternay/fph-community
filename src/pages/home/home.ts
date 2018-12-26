import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs';
import { DialogUtilService } from '../../app/util/dialog.util';
import { SearchFace } from '../../app/api/search-face';
import { otherApp } from '../../app/app.component';
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    private isPressBtn = true;
    private wordRandom = "";
    imagePath = "";
    peopleList = [];
    peopleLists = [];

    isLoadingFinnish = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private camera: Camera,
        public dialogUtil: DialogUtilService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        // if (!sessionStorage.getItem('peopleList')) {
        this.getPeople().then(() => {
            this.isLoadingFinnish = true;
            this.dialogUtil.hideLoadingDialog();
            this.peopleLists.push(this.peopleList[0])
            this.peopleLists.push(this.peopleList[1])
            this.peopleLists.push(this.peopleList[2])
            this.peopleLists.push(this.peopleList[3])
            this.peopleLists.push(this.peopleList[4])
            this.peopleLists.push(this.peopleList[5])
            this.peopleLists.push(this.peopleList[6])
        });
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
            quality: 85,
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

    goToSearchPageForIdentify() {
        this.navCtrl.push('SearchPage', { image: this.imagePath });
    }

    private updateGetImage(imageData: string) {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imagePath = base64Image;

        setTimeout(() => {
            this.goToSearchPageForIdentify();
            this.dialogUtil.hideLoadingDialog();
        }, 200)
    }
    public getPeople(): Promise<any> {
        return new Promise(resolve => {
            var otherDatabase = otherApp.database().ref("/peopleList");
            otherDatabase.on('value', resp => {
                resp.forEach(va => {
                    console.log(va.val())
                    this.peopleList.push(va.val())
                });
                resolve();
            });
        });
    }
}
