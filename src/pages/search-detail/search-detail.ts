import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Results } from '../search/data-layer/search-face-response';
import * as firebase from 'Firebase';
import { DialogUtilService } from '../../app/util/dialog.util';

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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private dialogUtilService: DialogUtilService
    ) {
        this.getParams();
    }

    ionViewDidLoad() {
        
    }

    private getParams() {
        this.data = this.navParams.get('data');
        console.log(this.data.face_token)
        this.searchFirebase(this.data.face_token);
    }

    private searchFirebase(child: string) {
        const ref = firebase.database().ref(child + '/');

        ref.on('value', resp => {
            let list = [];
            resp.forEach((item) => {
                list.push(item.val())
            })
            // console.log(list)
            // console.log(JSON.stringify(list))
            // this.name = JSON.parse(JSON.stringify(list))[0];
            this.name = list[0]
            this.dialogUtilService.hideLoadingDialog();
        });

    }

}
