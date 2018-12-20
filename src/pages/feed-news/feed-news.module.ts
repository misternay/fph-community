import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedNewsPage } from './feed-news';
import { ListPhotoComponentModule } from '../../components/list-photo/list-photo.module';

@NgModule({
    declarations: [
        FeedNewsPage,
    ],
    imports: [
        IonicPageModule.forChild(FeedNewsPage),
        ListPhotoComponentModule
    ],
})
export class FeedNewsPageModule { }
