import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

// Import User Model
import { Menu } from '../../models/menu';

// Import Github Provider

import { API } from '../../providers/github-users';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: boolean;
  // types for the first week
  menu: Menu[];
  Menu_date_start: string;
  Menu_date_end:string;
  Menu_month:string;

  //types for the second week
  menuNext: Menu[];
  menuNext_date_start: string;
  menuNext_date_end:string;
  menuNext_month:string;
  menus:string = 'weekly';


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: API, public platform: Platform) {

   document.addEventListener('pause', () => {
        console.log("APP PAUSED");
  });

   document.addEventListener('resume', () => {
    // set loading state
    this.loading = true;
    

    api.loadFirstWeek().subscribe(menu => {
      this.menu = menu;
      this.Menu_date_start = menu['acf'].date_monday.slice(0, 2);
      this.Menu_date_end = menu['acf'].date_saturday;
    
    })

     api.loadSecondWeek().subscribe(menu2 => {
      this.menuNext = menu2;
      this.menuNext_date_start = menu2['acf'].date_monday.slice(0, 2);
      this.menuNext_date_end = menu2['acf'].date_saturday;
      this.loading = false;    

    })

    this.loading = false;

    });

     // set loading state
    this.loading = true;

    api.loadFirstWeek().subscribe(menu => {
      this.menu = menu;
      this.Menu_date_start = menu['acf'].date_monday.slice(0, 2);
      this.Menu_date_end = menu['acf'].date_saturday;
    
    })

     api.loadSecondWeek().subscribe(menu2 => {
      this.menuNext = menu2;
      this.menuNext_date_start = menu2['acf'].date_monday.slice(0, 2);
      this.menuNext_date_end = menu2['acf'].date_saturday;
      this.loading = false;    

    })

  }

  ionViewDidLoad() {
    
  }

}
