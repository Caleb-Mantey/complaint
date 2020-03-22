import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,  Content, TextInput } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-complaint',
  templateUrl: 'complaint.html',
  providers: [AppProvider]
})
export class ComplaintPage {
    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;
    UserData;
    message = '';
    allMessages = [];

    //items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public appProvider: AppProvider, private storage: Storage, public navParams: NavParams ,
    public FirebaseService: FirebaseServiceProvider) {
    this.UserData = JSON.parse(localStorage.getItem("UserData"));
    this.fetchMessages();
    //this.items = this.FirebaseService.getItems();
    console.log(this.UserData);
  }

  storeMessages(items){
    this.storage.set("allMessages",items);
  }

  fetchMessages(){
    this.storage.get("allMessages").then((val) => {
      if(val != '' && val != null){
        this.allMessages = JSON.parse(val);
        console.log("true");
      }else{
        console.log("false");
      }
    });
  }

addItem() {
    if(this.message != '' && this.message != null){
      this.FirebaseService.addItem({"name": this.UserData.name,"roomNum": this.UserData.roomNum, "message": this.message});
      this.allMessages.push({"sent_message":this.message,"processing_message": ''});
      this.finishProcessing();
    }else{
      this.appProvider.showPrompt("Error!", "Make sure you enter a message.");
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintPage');
  }

  _focus() {
      this.content.resize();
      this.scrollToBottom();
  }

  finishProcessing(){
    let index = this.allMessages.length - 1;
    setTimeout(() => {
      console.log("Index: " + index);
      console.log(this.allMessages);
        if (this.allMessages[index].processing_message == "") {
            this.allMessages[index].processing_message ='done';
        }
    }, 1500);
    this.storeMessages(JSON.stringify(this.allMessages));
  }

  scrollToBottom() {
      setTimeout(() => {
          if (this.content.scrollToBottom) {
              this.content.scrollToBottom();
          }
      }, 400);
  }

}
