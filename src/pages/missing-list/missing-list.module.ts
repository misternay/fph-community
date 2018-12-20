import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissingListPage } from './missing-list';

@NgModule({
    declarations: [
        MissingListPage,
    ],
    imports: [
        IonicPageModule.forChild(MissingListPage),
    ],
})
export class MissingListPageModule { }
