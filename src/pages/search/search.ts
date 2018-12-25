import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchFace } from '../../app/api/search-face';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs';
import { DialogUtilService } from '../../app/util/dialog.util';
import { MissingList } from '../missing-list/missing-list-mock-data';
import { SearchFaceResponse } from './data-layer/search-face-response';
import { otherApp } from '../../app/app.component';

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})
export class SearchPage {

    imagePath = 'assets/imgs/image-empty.jpg';
    isCapture = false;
    peopleList: Array<any> = [];

    private missingData: MissingList = {
        name: '',
        province: '',
        image: '',
        imageToken: ''
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private searchFace: SearchFace,
        private camera: Camera,
        private dialogUtil: DialogUtilService
    ) {
        this.getParams();
    }

    ionViewDidLoad() {

    }

    goToHomePage() {
        this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 });
    }

    private getParams() {
        if (this.navParams.get('image')) {
            this.imagePath = this.navParams.get('image')
            this.search(this.imagePath)
        }
    }

    capture() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        }

        console.log(JSON.stringify(options))
        this.getImage(options);
    }

    private getImage(options: CameraOptions) {
        Observable.fromPromise(
            this.camera.getPicture(options)
        ).subscribe(
            imageData => {
                this.updateGetImage(imageData);
            }, err => {
                console.log('search error', JSON.stringify(err))
            }
        );
    }

    private updateGetImage(imageData: string) {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imagePath = base64Image;
        this.search(this.imagePath);
    }

    private search(image: string) {
        this.dialogUtil.showLoadingDialog();
        this.searchFace.call(image).subscribe(
            res => {
                console.log(JSON.stringify(res));
                this.processIdentify(res);
            }, err => {
                console.log(JSON.stringify(err))
                this.navCtrl.push('SearchDetailPage', {
                    image: this.imagePath
                });
            }
        );
    }
    private processIdentify(response: any) {
        let dataDetail = {};
        if (response.results) {
            this.getPeople().then(() => {
                dataDetail = this.peopleList.find(value => {
                    return value.faceToken == response.results[0].face_token;
                });
                this.dialogUtil.hideLoadingDialog();
                this.navCtrl.push('SearchDetailPage', {
                    missingDetail: dataDetail,
                    image: this.imagePath,
                    confidence: response.results[0].confidence
                }).then(() => {
                    this.imagePath = "";
                });
            });
        } else {
            this.dialogUtil.hideLoadingDialog();
            this.navCtrl.push('SearchDetailPage', {
                image: this.imagePath
            });
        }
    }

    public getPeople(): Promise<any> {
        return new Promise(resolve => {
            var otherDatabase = otherApp.database().ref("/peopleList");
            otherDatabase.on('value', resp => {
                resp.forEach(va => {
                    console.log(va.val())
                    this.peopleList.push(va.val())
                });
                sessionStorage.setItem('peopleList', JSON.stringify(this.peopleList));
                resolve();
            });
        });
    }
}
