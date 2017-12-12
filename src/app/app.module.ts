import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SettingPage} from "../pages/setting/setting";
import {SignPage} from "../pages/sign/sign";
import {StudentPage} from "../pages/student/student";
import {RecordPage} from "../pages/record/record";
import {ProfilePage} from "../pages/profile/profile";
import {LoginPage} from "../pages/login/login";
import {InvitePage} from "../pages/invite/invite";
import {RegisterPage} from "../pages/register/register";
import {CreatePage} from "../pages/create/create";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingPage,
    SignPage,
    StudentPage,
    RecordPage,
    ProfilePage,
    LoginPage,
    InvitePage,
    RegisterPage,
    CreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingPage,
    SignPage,
    StudentPage,
    RecordPage,
    ProfilePage,
    LoginPage,
    InvitePage,
    RegisterPage,
    CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
