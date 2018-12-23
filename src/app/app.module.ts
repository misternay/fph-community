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
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "angularfire2";


export const firebaseConfig = {
  apiKey: "AIzaSyDsWN5fjPvPdPycnuGLGHWEnvrxbhMpk1s",
  authDomain: "backtohome-28375.firebaseapp.com",
  databaseURL: "https://backtohome-28375.firebaseio.com",
  storageBucket: "backtohome-28375.appspot.com",
  messagingSenderId: "569221856929"
};
export const fhp = {
  apiKey: "AIzaSyCk99Mv8Tsn5rnw9i2Uv2cfb0Bx2ma4Lro",
  authDomain: "fph-community.firebaseapp.com",
  databaseURL: "https://fph-community.firebaseio.com",
  projectId: "fph-community",
  storageBucket: "fph-community.appspot.com",
  messagingSenderId: "443617903757"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios",
      statusbarPadding: false, //แก้ iOS11
      swipeBackEnabled: false,
      backButtonText: "",
      backButtonIcon: "arrow-back"
    }),
    AngularFireModule.initializeApp(firebaseConfig)
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
