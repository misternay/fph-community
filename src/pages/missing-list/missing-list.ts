import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockMissingList, MissingList } from './missing-list-mock-data';
import { AngularFireDatabase } from 'angularfire2/database';
import { DialogUtilService } from '../../app/util/dialog.util';
import * as firebase from 'Firebase';
import { TranFormUtil } from '../../app/util/tranform.util';

export interface FirebaseResponse {
    name: string;
    image: string;
}

@IonicPage()
@Component({
    selector: 'page-missing-list',
    templateUrl: 'missing-list.html',
    providers: [
        MockMissingList,
        AngularFireDatabase,
        DialogUtilService,
        TranFormUtil
    ]
})
export class MissingListPage {

    // listItem = this.getMockMissingList.getMockData();
    listItem: Array<MissingList>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        // private getMockMissingList: MockMissingList,
        private dialogUtil: DialogUtilService,
    ) { }

    ionViewDidLoad() {
        this.dialogUtil.showLoadingDialog();
        this.getFromFirebase();
    }

    goTOSearchDetail(index: number) {
        console.log(index)
        this.navCtrl.push('SearchPage', {
            missingData: this.listItem[index]
        });
    }

    private getFromFirebase() {
        const ref = firebase.database().ref('/');

        ref.on('value', resp => {
            let list = [];

            resp.forEach(res => {
                list.push(res.val())
            })

            this.listItem  = list;
            this.dialogUtil.hideLoadingDialog();
        })
    }
}
