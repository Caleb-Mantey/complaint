import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,  Content, TextInput } from 'ionic-angular';

/**
 * Generated class for the ComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-complaint',
  templateUrl: 'complaint.html',
})
export class ComplaintPage {
    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;
    UserData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserData = JSON.parse(localStorage.getItem("UserData"));
    console.log(this.UserData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintPage');
  }

  _focus() {
      this.content.resize();
      this.scrollToBottom();
  }

  scrollToBottom() {
      setTimeout(() => {
          if (this.content.scrollToBottom) {
              this.content.scrollToBottom();
          }
      }, 400);
  }

}
