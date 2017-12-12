import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {InvitePage} from "../invite/invite";
import {LoginPage} from "../login/login";
import {SignPage} from "../sign/sign";
import {RecordPage} from "../record/record";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  invite(){
    this.navCtrl.push(InvitePage);
  }
  
  logout(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
  
  sign(){
    this.navCtrl.push(SignPage);
  }
  
  records(){
    this.navCtrl.push(RecordPage);
  }
  
  profile(){
    this.navCtrl.push(ProfilePage);
  }
  
  

}
