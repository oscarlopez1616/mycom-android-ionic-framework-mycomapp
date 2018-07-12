import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Balance} from "../../domain/Balance";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private balance: Balance;

  constructor(public navCtrl: NavController) {
    this.balance = {
      "quantity": 200,
      "currency": "EUR"
    };
  }

  public refreshBalance(): void {
  }

}
