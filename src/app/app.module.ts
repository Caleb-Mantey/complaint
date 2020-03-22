import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComplaintPage } from '../pages/complaint/complaint';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AppProvider } from '../providers/app/app';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import {HttpModule} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyB2f0Y5FzIWYuxK1ky5e0LwHTUrgmjlokc",
    authDomain: "complaint-56a42.firebaseapp.com",
    databaseURL: "https://complaint-56a42.firebaseio.com",
    projectId: "complaint-56a42",
    storageBucket: "complaint-56a42.appspot.com",
    messagingSenderId: "348411680471"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignInPage,
    ComplaintPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignInPage,
    ComplaintPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
