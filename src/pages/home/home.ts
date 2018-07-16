import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Balance} from "../../domain/Balance";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    configUrl = 'assets/config.json';

    private balance: Balance;


    constructor(public navCtrl: NavController, private http: HttpClient) {
        this.balance = {
            "quantity": 200,
            "currency": "EUR"
        };
    }

    public refreshBalance(): void {
        this.configService.getConfig()
            .subscribe((data: Config) => this.config = {
                heroesUrl: data['heroesUrl'],
                textfile:  data['textfile']
            });
    }

    public getConfig() {
        return this.http.get(this.configUrl);
    }

    public showConfig() {
        this.configService.getConfig()
            .subscribe((data: Config) => this.config = {
                heroesUrl: data['heroesUrl'],
                textfile:  data['textfile']
            });
    }

}
