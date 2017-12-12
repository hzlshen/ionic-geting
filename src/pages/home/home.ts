import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreatePage} from "../create/create";
import {StudentPage} from "../student/student";
import {InvitePage} from "../invite/invite";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getInfo(){
    this.navCtrl.push(StudentPage);
  }

  addStudent(){
    this.navCtrl.push(CreatePage);
  }

  invite(){
    this.navCtrl.push(InvitePage);
  }

  getItems(event){

  }
}
