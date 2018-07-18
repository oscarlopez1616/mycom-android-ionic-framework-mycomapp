import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

export interface BalanceEndPoint {
    gender: string;
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class balanceService {
    balanceUrl = 'https://randomuser.me/api/';
    balanceUrlPost = 'https://httpbin.org/post';


    constructor(private http: HttpClient) { }

    public balance() {
        return this.http.get(this.balanceUrl)
            .pipe(
                retry(3),
                //catchError(this.handleError) // then handle the error
            );
    }

    public addBalance(){
        return this.http.post(this.balanceUrlPost, null, httpOptions)
            .pipe(
            );
    }

    public balanceResponse(): Observable<HttpResponse<BalanceEndPoint>> {
        return this.http.get<BalanceEndPoint>(
            this.balanceUrl, { observe: 'response' });
    }

}