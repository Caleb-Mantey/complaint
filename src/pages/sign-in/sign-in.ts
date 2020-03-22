import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
  providers: [AppProvider]
})
export class SignInPage {

  name: string;
  roomNum: string;

  constructor(public navCtrl: NavController , public appProvider: AppProvider, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  SignIN(){
    if(this.name == "" || this.name == null){
      this.appProvider.showPrompt("Sign-In Error!", "Make sure a field is not left empty.");
    }else{
      if(parseInt(this.roomNum.toUpperCase().replace("KT", ""), 10) > 0 && parseInt(this.roomNum.toUpperCase().replace("KT", ""), 10) < 343){
        this.OpenPage({"roomNum": this.roomNum.toUpperCase().replace("KT", ""), "name": this.name.toUpperCase()});
        //console.log('Valid Room No ' + parseInt(this.roomNum, 10));
      }else{
        this.appProvider.showPrompt("Sign-In Error!", "Make sure you enter a valid room number.");
        //console.log('InValid Room No ' + parseInt(this.roomNum, 10));
      }
    }
  }

  OpenPage(data: any){
    localStorage.setItem("UserData", JSON.stringify(data));
    this.storage.set("UserData", JSON.stringify(data));
    this.navCtrl.push(HomePage, {"UserData": data});
  }
}
