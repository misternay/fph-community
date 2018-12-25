import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockMissingList, MissingList } from './missing-list-mock-data';
import { AngularFireDatabase } from 'angularfire2/database';
import { DialogUtilService } from '../../app/util/dialog.util';
import * as firebase from 'Firebase';
import { TranFormUtil } from '../../app/util/tranform.util';
import { otherApp } from '../../app/app.component';

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

    datelist = ['today', 'yesterday', 'monthago']
    monthList = ['ธันวาคม', 'พฤศจิกายน', 'ตุลาคม', 'อื่นๆ']

    listDateItem = this.getMockMissingList.getMockData();

    listPeople = {
        december: [],
        november: [],
        october: [],
        other: []
    }
    people = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private getMockMissingList: MockMissingList,
        private dialogUtil: DialogUtilService,
    ) {
    }

    ionViewDidLoad() {
        if (sessionStorage.getItem('peopleList')) {
            this.people = JSON.parse(sessionStorage.getItem('peopleList'));
            this.prepareDisplay();
        } else {
            this.getListOfPeople();
        }
    }

    ionViewDidEnter() {
    }
    prepareDisplay() {
        this.people.forEach((value: { date: string, name: string, image: string, detail: string, faceToken: string }) => {
            console.log(value.date)
            if (value.date.includes(this.monthList[0])) {
                this.listPeople.december.push(value)
            } else if (value.date.includes(this.monthList[1])) {
                this.listPeople.november.push(value)
            } else if (value.date.includes(this.monthList[2])) {
                this.listPeople.october.push(value)
            } else {
                this.listPeople.other.push(value)
            }
        })
    }
    goTOSearchDetail(dayIndex: number, index: number) {
        this.navCtrl.push('SearchPage', {
            missingData: this.listDateItem[index]
        });
    }

    getListOfPeople() {
        this.dialogUtil.showLoadingDialog();
        setTimeout(()=>{
            this.dialogUtil.hideLoadingDialog();
        },1000)
        var otherDatabase = otherApp.database().ref("/peopleList");
        otherDatabase.on('value', resp => {
            resp.forEach(va => {
                console.log(va.val())
                this.people.push(va.val())
            })
            sessionStorage.setItem('peopleList', JSON.stringify(this.people));
            this.prepareDisplay();
        });
    }
    goToDetail(data) {
        this.navCtrl.push('MissingDetailPage', { peopleDetail: data })
    }
}