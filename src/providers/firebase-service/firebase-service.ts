import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getItems(){
    return this.afd.list('/complaint/');
  }

  addItem(name){
    this.afd.list('/complaint/').push(name);
  }

  removeItem(id){
    this.afd.list('/complaint/').remove(id);
  }
}
