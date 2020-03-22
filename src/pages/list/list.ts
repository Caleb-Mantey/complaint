import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  UserData;
  items = [{
    title: 'Wifi Not Working',
    icon: 'wifi'
    },{
      title: 'Water Problem',
      icon: 'wifi'
    },{
      title: 'Lights Not Working',
      icon: 'wifi'
    },{
      title: 'Sockets/Switches Not Working',
      icon: 'wifi'
    },{
      title: 'Fan Not Working',
      icon: 'wifi'
    }];
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,
    public FirebaseService: FirebaseServiceProvider) {

    this.UserData = JSON.parse(localStorage.getItem("UserData"));

  }

  addItem(message) {
        this.FirebaseService.addItem({"name": this.UserData.name,"roomNum": this.UserData.roomNum, "message": message});
        this.Processing();
    }

    Processing() {
        setTimeout(() => {
          const toast = this.toastCtrl.create({
           message: 'Your Complaint is being processed!',
           duration: 3000,
           position: 'middle',
         });
         toast.present();
        }, 1500);
    }
}
