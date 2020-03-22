import { Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log('Hello AppProvider Provider');
  }

  OpenPage(page: any){
    this.navCtrl.push(page);
  }

  DoLogout(){
      this.navCtrl.pop();
  }

  showLogoutPrompt(title: string, message: string) {
    let prompt = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            this.DoLogout();
            console.log('Cancel clicked');
          }
        },
        {
          text: 'No',
          handler: data => {

            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showPrompt(title: string, message: string) {
    let prompt = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
