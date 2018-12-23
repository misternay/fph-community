import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissingDetailPage } from './missing-detail';

@NgModule({
  declarations: [
    MissingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MissingDetailPage),
  ],
})
export class MissingDetailPageModule {}
