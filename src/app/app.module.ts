import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Diagnostic } from '@ionic-native/diagnostic'
import { Camera } from '@ionic-native/camera'
import { HTTP } from '@ionic-native/http'
import { ImagePicker } from '@ionic-native/image-picker'
import { Geolocation } from '@ionic-native/geolocation'
import { Firebase } from '@ionic-native/firebase'
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Diagnostic,
    Camera,
    HTTP,
    ImagePicker,
    Geolocation,
    Firebase
  ]
})
export class AppModule { }
