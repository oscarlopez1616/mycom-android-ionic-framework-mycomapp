import { Component } from '@angular/core';
import { BalanceEndPoint, BalanceService } from './balance.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    providers: [ BalanceService ],
    styles: ['.error {color: red;}']
})
export class BalanceComponent {
    error: any;
    headers: string[];
    balanceEndPoint: BalanceEndPoint;

    constructor(private balanceService: BalanceService) {}

    clear() {
        this.balanceEndPoint = undefined;
        this.error = undefined;
        this.headers = undefined;
    }

    showBalance() {
        this.balanceService.getBalance()
            .subscribe(
                (data: BalanceEndPoint) => this.balanceEndPoint = { ...data },
                error => this.error = error // error path
            );
    }

    showBalanceResponse() {
        this.balanceService.getBalanceResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                // display its headers
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                // access the body directly, which is typed as `Config`.
                this.balanceEndPoint = { ... resp.body };
            });
    }
}