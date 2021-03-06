import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignInPage } from '../pages/sign-in/sign-in';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: SignInPage },
      { title: 'List', component: ListPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*this.storage.get("UserData").then((val) => {
        if(val != '' && val != null){
          console.log(val);
          rootPage = HomePage;
          //this.nav.setRoot(HomePage);
        }else{
          rootPage = SignInPage;
        }
      });*/
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  fetchUserData(){
    this.storage.get("UserData").then((val) => {
      if(val != '' && val != null){
        localStorage.setItem("UserData", val);
        console.log("true");
      }else{
        console.log("false");
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
