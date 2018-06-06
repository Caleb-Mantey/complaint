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

  constructor(public navCtrl: NavController , public appProvider: AppProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  OpenPage(){
    this.navCtrl.push(HomePage);
  }
}
