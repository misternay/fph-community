import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchFace } from '../../app/api/search-face';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DialogUtilService } from '../../app/util/dialog.util';

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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private searchFace: SearchFace,
        private camera: Camera,
        private dialogUtil: DialogUtilService
    ) { }

    ionViewDidLoad() { }

    goToHomePage() {
        this.navCtrl.setRoot('HomePage');
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
                console.log(JSON.stringify(res))
                if (res.results && res.results[0]) {
                    this.navCtrl.push('SearchDetailPage', {
                        data: res.results[0]
                    });
                } else {
                    this.caseNotFound();
                }
            }, err => {
                console.log(JSON.stringify(err))
                this.caseNotFound();
            }
        );
    }

    private caseNotFound() {
        alert('Not found')
        this.dialogUtil.hideLoadingDialog();
    }
}
