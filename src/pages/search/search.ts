import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchFace } from '../../app/api/search-face';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DialogUtilService } from '../../app/util/dialog.util';
import { MissingList } from '../missing-list/missing-list-mock-data';
import { SearchFaceResponse } from './data-layer/search-face-response';

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
    providers: [
        SearchFace,
        HttpClient,
        DialogUtilService
    ]
})
export class SearchPage {

    imagePath = 'assets/imgs/image-empty.png';
    isCapture = false;

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

    ionViewDidLoad() { }

    goToHomePage() {
        this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'back', animation: 'md-transition', duration: 200 });
    }

    private getParams() {
        this.missingData = this.navParams.get('missingData');
        // if (this.missingData) {
        //     this.imagePath = this.missingData.image;
        //     this.isCapture = true;
        // }
    }

    capture() {
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
                this.updateGetImage(imageData);
            }, err => {
                console.log('search error')
            }
        );
    }

    private updateGetImage(imageData: string) {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imagePath = base64Image;
        this.isCapture = true;
    }

    confirmSearch() {
        this.search(this.imagePath);
    }

    private search(image: string) {
        this.dialogUtil.showLoadingDialog();
        this.searchFace.call(image).subscribe(
            res => {
                (this.IsFoundFace(res)) ? this.caseFound(res) : this.caseNotFound();
            }, err => {
                console.log(JSON.stringify(err))
                this.caseNotFound();
            }
        );
    }

    private caseFound(res: SearchFaceResponse) {
        if (this.missingData && this.missingData.imageToken) {
            if (this.missingData.imageToken === res.results[0].face_token) {
                this.goToSearchDetail(res);
            } else {
                this.caseNotMatch();
            }
        } else {
            this.goToSearchDetail(res);
        }
    }

    private caseNotFound() {
        alert('Not found')
        this.dialogUtil.hideLoadingDialog();
    }

    private caseNotMatch() {
        alert('Not Match')
        this.dialogUtil.hideLoadingDialog();
    }

    private goToSearchDetail(res: SearchFaceResponse) {
        this.navCtrl.push('SearchDetailPage', {
            data: res.results[0],
            image: this.imagePath,
            missingData: this.missingData
        });
    }

    private IsFoundFace(res: SearchFaceResponse): boolean {
        if (res.results && res.results[0]) {
            return true
        }
        return false;
    }
}
