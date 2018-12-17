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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private searchFace: SearchFace,
        private camera: Camera,
        private dialogUtil: DialogUtilService
    ) { }

    ionViewDidLoad() { }

    capture() {
        const options: CameraOptions = {
            quality: 60,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.getImage(options);
    }

    private getImage(options: CameraOptions) {
        Observable.fromPromise(
            this.camera.getPicture(options)
        ).subscribe(
            imageData => {
                const base64Image = 'data:image/jpeg;base64,' + imageData;
                this.search(base64Image);
            }, err => {
                console.log('search error')
            }
        );
    }

    private search(image: string) {
        this.dialogUtil.showLoadingDialog();
        this.searchFace.call(image).subscribe(
            res => {
                this.navCtrl.push('SearchDetailPage', { 
                    data: res.results[0]
                });
            }, err => {
                alert('Not found')
            }
        );
    }

}
