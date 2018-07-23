import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from "rxjs/Observable";
import {User} from "../domain/user";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class GetUserService {

    private urlEndpoint: string;

    constructor(private http: HttpClient) {
        this.urlEndpoint = 'https://httpbin.org/post';
    }

    public execute(): Observable<User> {
        return this.http.get(this.urlEndpoint,httpOptions)
            .pipe(
                retry(3),
                //catchError(this.handleError) // then handle the error
            );
    }
}
