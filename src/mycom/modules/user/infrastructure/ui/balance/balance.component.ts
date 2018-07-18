import {Component} from '@angular/core';
import {BalanceEndPoint, userService} from '../../../application/balance.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    providers: [userService],
    styles: ['.error {color: red;}']
})
export class BalanceComponent {
    error: any;
    headers: string[];
    balanceEndPoint: BalanceEndPoint;

    constructor(private balanceService: userService) {
    }

    clear() {
        this.balanceEndPoint = undefined;
        this.error = undefined;
        this.headers = undefined;
    }

    public showBalance() {
        this.balanceService.balance()
            .subscribe(
                (data: BalanceEndPoint) => this.balanceEndPoint = {
                    gender: data['results'][0]['gender']
                },
                error => this.error = error // error path
            );
    }

    public addBalance() {
        this.balanceService.addBalance()
            .subscribe(data => console.log(data));
    }

    public showBalanceResponse() {
        this.balanceService.balanceResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                // display its headers
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                // access the body directly, which is typed as `Config`.
                this.balanceEndPoint = {...resp.body};
            });
    }
}