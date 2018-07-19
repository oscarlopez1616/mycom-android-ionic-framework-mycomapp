import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class AddUserService {

    private urlEndpoint: string;

    constructor(private http: HttpClient) {
        this.urlEndpoint = 'https://httpbin.org/post';
    }

    public execute(): Observable<any> {
        return this.http.post(this.urlEndpoint, null, httpOptions)
            .pipe(
            );
    }

}