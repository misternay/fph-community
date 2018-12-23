import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Results } from '../search/data-layer/search-face-response';
import * as firebase from 'Firebase';
import { DialogUtilService } from '../../app/util/dialog.util';
import { MissingList } from '../missing-list/missing-list-mock-data';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
    selector: 'page-search-detail',
    templateUrl: 'search-detail.html',
    providers: [
        AngularFireDatabase,
        DialogUtilService
    ]
})
export class SearchDetailPage {

    data: Results = {
        confidence: 0,
        user_id: '',
        face_token: '',
    };

    name = '';
    missingData: MissingList = {
        name: '',
        province: '',
        image: '',
        imageToken: ''
    };

    image1 = 'assets/imgs/image-empty.jpg';
    image2 = 'assets/imgs/image-empty.jpg';

    dataFromFirebase: any = {};

    // private location = '';
    latitude: number;
    longitude: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private dialogUtilService: DialogUtilService,
        private geolocation: Geolocation
    ) {
        this.getParams();
    }

    ionViewDidLoad() {
        // if (this.missingData && this.missingData.image) {
        //     this.image2 = this.missingData.image;
        //     this.dialogUtilService.hideLoadingDialog();
        // } else {
        //     this.searchFirebase(this.data.face_token);
        // }
    }

    private getParams() {
        this.missingData = this.navParams.get('missingData');
        this.data = this.navParams.get('data');
        this.image1 = this.navParams.get('image');
    }

    private searchFirebase(child: string) {
        const ref = firebase.database().ref(child + '/');

        ref.on('value', resp => {

            this.dataFromFirebase = resp.val();

            console.log('name : ', JSON.stringify(this.dataFromFirebase))
            this.name = this.dataFromFirebase.name;
            this.image2 = this.dataFromFirebase.image;
            this.dialogUtilService.hideLoadingDialog();
        });

    }

    private backToHome() {
        this.navCtrl.setRoot('HomePage')
    }

    getLocation() {
        this.dialogUtilService.showLoadingDialog();
        this.geolocation.watchPosition().subscribe(res => {
            this.latitude = res.coords.latitude;
            this.longitude = res.coords.longitude;
            this.dialogUtilService.hideLoadingDialog();
        })
    }

    isLocation(): boolean {
        if (this.latitude && this.longitude) {
            return true
        }
        return false
    }
}
