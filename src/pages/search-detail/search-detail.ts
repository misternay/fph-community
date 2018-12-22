import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Results } from '../search/data-layer/search-face-response';
import * as firebase from 'Firebase';
import { DialogUtilService } from '../../app/util/dialog.util';
import { MissingList } from '../missing-list/missing-list-mock-data';

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
        image: ''
    };

    image1 = 'assets/imgs/image-empty.png';
    image2 = 'assets/imgs/image-empty.png';

    dataFromFirebase: any = {};

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private dialogUtilService: DialogUtilService
    ) {
        // this.getParams();
    }

    ionViewDidLoad() {
        // if (this.missingData && this.missingData.image) {
        //     // this.image1 = this.
        //     this.image2 = this.missingData.image;
        //     this.dialogUtilService.hideLoadingDialog();
        // } else {
        // this.searchFirebase(this.data.face_token);
        // console.log(this.data.face_token)
        // }
    }

    private getParams() {
        this.missingData = this.navParams.get('missingData');
        this.data = this.navParams.get('data');
        this.image1 = this.navParams.get('image');
        // console.log(this.data.face_token)
    }

    private searchFirebase(child: string) {
        const ref = firebase.database().ref(child + '/');

        ref.on('value', resp => {
            // let list = [];
            // resp.forEach((item) => {
            //     list.push(item.val())
            // })

            this.dataFromFirebase = resp.val();

            console.log('name : ', JSON.stringify(this.dataFromFirebase))
            this.name = this.dataFromFirebase.name;
            this.image2 = this.dataFromFirebase.image;
            this.dialogUtilService.hideLoadingDialog();
        });

    }

    private getImage2() {
        // this.this.missingData.name
    }
    private backToHome() {
        this.navCtrl.setRoot('HomePage')
    }
}
