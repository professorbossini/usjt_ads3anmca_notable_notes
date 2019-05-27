import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyC1UBKruyTimB-z9RI6-KPeUzOxJh2GMGA",
  authDomain: "usjt-ads3anmca-notable-notes.firebaseapp.com",
  databaseURL: "https://usjt-ads3anmca-notable-notes.firebaseio.com",
  projectId: "usjt-ads3anmca-notable-notes",
  storageBucket: "usjt-ads3anmca-notable-notes.appspot.com",
  messagingSenderId: "656470120097",
  appId: "1:656470120097:web:cc11beab04c00895"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
