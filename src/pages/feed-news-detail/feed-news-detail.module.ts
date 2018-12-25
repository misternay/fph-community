import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedNewsDetailPage } from './feed-news-detail';

@NgModule({
  declarations: [
    FeedNewsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedNewsDetailPage),
  ],
})
export class FeedNewsDetailPageModule {}
