import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// Import the User Model
import { Menu  } from './../models/menu';


@Injectable()
export class API {

  pulnoKoremcheApi = 'http://pulnokoremche.com/wp-json/wp/v2/pages';

  constructor(public http: Http) {
   
  }

  // Load menu for the first week
  loadFirstWeek(): Observable<Menu[]> {
    return this.http.get(`${this.pulnoKoremcheApi}/2`)
      .map(res => <Menu[]>res.json());
  }

  // Load menu for the second week
  loadSecondWeek(): Observable<Menu[]> {
    return this.http.get(`${this.pulnoKoremcheApi}/292`)
      .map(res => <Menu[]>res.json());
  }

  
}

