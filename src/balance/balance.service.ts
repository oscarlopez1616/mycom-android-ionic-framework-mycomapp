import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

export interface BalanceEndPoint {
    balanceUrl: string;
    dataText: string;
}

@Injectable()
export class BalanceService {
    balanceUrl = 'assets/balance.json';

    constructor(private http: HttpClient) { }

    getBalance() {
        return this.http.get<BalanceEndPoint>(this.balanceUrl)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                //catchError(this.handleError) // then handle the error
            );
    }

    getBalanceResponse(): Observable<HttpResponse<BalanceEndPoint>> {
        return this.http.get<BalanceEndPoint>(
            this.balanceUrl, { observe: 'response' });
    }

}

