import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from '@ionic-native/image-picker';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController,
    public imagePicker:ImagePicker,
    public camera:Camera
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  avatar;
  
  getImage(){
    this.imagePicker.getPictures({maximumImagesCount:1}).then((results)=>{
      for(var i = 0;i<results.length;i++){
        console.log("Image URI"+results[i]);
        this.avatar = results[i];
      }
    },(err)=>{})
  }
  
  getPhoto(){
    const options:CameraOptions = {
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData)=>{
      this.avatar = imageData;
    },(err)=>{
      console.log(err);
    });
  }
  
  chooseImageType(){
    let actionSheet = this.actionSheetCtrl.create({
      title:'',
      buttons:[
        {
          text:'拍照',
          handler:()=>{
            this.getPhoto();
            console.log('拍照 clicked');
          }
        },
        {
          text:'相册',
          handler:()=>{
            this.getPhoto();
            console.log('相册 clicked');
          }
        },
        {
          text:'取消',
          role:'cancel',
          handler:()=>{
            this.getPhoto();
            console.log('取消 clicked');
          }
        }
      ]
    })
    actionSheet.present();
  }

}
