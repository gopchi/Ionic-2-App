import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import User Model
import { Menu } from '../../models/menu';

// Import Github Provider

import { API } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

  menu: Menu[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: API) {

    api.loadFirstWeek().subscribe(menu => {
      this.menu = menu;
      console.log(menu)
    })
  }

  ionViewDidLoad() {
    
  }

}
