import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ComplaintPage } from '../complaint/complaint';
import { AppProvider } from '../../providers/app/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppProvider]
})
export class HomePage {
  UserData;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider) {
      this.UserData = this.navParams.get("UserData");
      console.log(this.UserData);
  }

  Logout(){
    this.appProvider.showLogoutPrompt("Confirmation!", "Are you sure you want to logout?");
  }

  OpenQuickComplaint(){
    this.appProvider.OpenPage(ListPage);
  }

  OpenComplaint(){
    this.appProvider.OpenPage(ComplaintPage);
  }
}
