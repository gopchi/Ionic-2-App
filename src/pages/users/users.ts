import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import User Model
import { Menu } from '../../models/menu';

// Import Github Provider

import { API } from '../../providers/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  menu: Menu[];
  loading: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: API) {

    // set loading state
    this.loading = true;

    api.loadFirstWeek().subscribe(menu => {
      this.menu = menu;
      this.loading = false;
     
    })
  }

  ionViewDidLoad() {
    
  }

}
