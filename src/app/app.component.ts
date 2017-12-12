import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";


@Component({
  // templateUrl: 'app.html'
  template:`
    <ion-tabs>
      <ion-tab tabIcon="body" tabTitle="学员" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="settings" tabTitle="设置" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class MyApp {
  // rootPage:any = HomePage;
  tab1:any;
  tab2:any;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.tab1=HomePage;
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
