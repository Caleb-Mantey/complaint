import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ComplaintPage } from '../complaint/complaint';
import { AppProvider } from '../../providers/app/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AppProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, public appProvider: AppProvider) {

  }

  Logout(){
    this.appProvider.showPrompt("Confirmation!", "Are you sure you want to logout?");
  }

  OpenQuickComplaint(){
    this.appProvider.OpenPage(ListPage);
  }

  OpenComplaint(){
    this.appProvider.OpenPage(ComplaintPage);
  }
}
