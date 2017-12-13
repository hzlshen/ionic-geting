import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import {Camera} from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController,
    public imagePicker:ImagePicker,
    public camera: Camera
  ) {
  
  }
  
  //时间
  defaultTime = "2017-09-12";
  
  images = new Array();
  
  getImage(){
    this.imagePicker.getPictures({maximumImagesCount:5}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.images.push(results[i]);
        console.log('图片URI: ' + results[i]);
      }
    }, (err) => { });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

}
