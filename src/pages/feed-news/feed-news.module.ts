import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedNewsPage } from './feed-news';

@NgModule({
    declarations: [
        FeedNewsPage,
    ],
    imports: [
        IonicPageModule.forChild(FeedNewsPage),
    ],
})
export class FeedNewsPageModule { }
