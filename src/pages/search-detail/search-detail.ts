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
    isFound = false;
    isShared = false;
    name = '';
    missingData: any = {
        image: "",
        name: ""
    };

    userImage = '';
    missingImage = '';
    confidence = "0.00";
    dataFromFirebase: any = {};
    textAreaValue: string = "";

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
    }

    private getParams() {
        this.missingData = this.navParams.get('missingDetail');
        this.data = this.navParams.get('data');
        this.userImage = this.navParams.get('image');
        this.confidence = this.navParams.get('confidence');
        this.setUpUi();
    }

    public setUpUi() {
        if (this.missingData) {
            console.log("found ", this.missingData)
            this.missingImage = this.missingData.image;
            this.isFound = true;
            this.name = this.missingData.name;
        } else {

        }
    }
    private backToHome() {
        this.navCtrl.setRoot('HomePage')
    }

    getLocation() {
        this.dialogUtilService.showLoadingDialog();
        this.geolocation.getCurrentPosition().then(res => {
            this.latitude = res.coords.latitude;
            this.longitude = res.coords.longitude;
        }).catch(() => {
            this.dialogUtilService.hideLoadingDialog();
        });
    }
    sharePost() {
        let arrayPost: Array<any> = JSON.parse(localStorage.getItem('post')) ? JSON.parse(localStorage.getItem('post')) : [];
        arrayPost.push({
            image: this.userImage,
            missing: this.missingImage,
            detail: this.textAreaValue,
            name: this.missingData.name
        });
        localStorage.setItem('post', JSON.stringify(arrayPost));
        this.isShared = true;
    }
    isLocation(): boolean {
        if (this.latitude && this.longitude) {
            return true
        }
        return false
    }
}
