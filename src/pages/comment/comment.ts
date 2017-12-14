import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import {Camera, CameraOptions} from '@ionic-native/camera';
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
  getPhoto(){
    
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log("============拍照图片地址===========")
      console.log(imageData);
      this.images.push(imageData);
      
    }, (err) => {
      // Handle error
    });
  }
  
  chooseImageType() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.getPhoto();
            console.log('拍照 clicked');
          }
        }, {
          text: '相册',
          handler: () => {
            this.getImage();
            console.log('相册 clicked');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

}
