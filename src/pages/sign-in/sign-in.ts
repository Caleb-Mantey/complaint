import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';

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

  constructor(public navCtrl: NavController , public appProvider: AppProvider, public navParams: NavParams) {
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
    this.navCtrl.push(HomePage, {"UserData": data});
  }
}
