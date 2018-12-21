import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ListPhotoComponentModule } from '../../components/list-photo/list-photo.module';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
})
export class HomePageModule { }
