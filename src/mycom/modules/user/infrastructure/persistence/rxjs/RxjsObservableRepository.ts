import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {UserObservableRepository} from "../../../domain/userObservableRepository";
import {AddUserCommand} from "../../../application/add.user.command";
import {Injectable} from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class RxjsObservableRepository extends UserObservableRepository{

    private urlEndpoint: string;

    constructor(private http: HttpClient) {
        super();
        this.urlEndpoint = 'https://httpbin.org/post';
    }

    addUser(dto: AddUserCommand): Observable<any> {
        return this.http.post<any>(this.urlEndpoint, dto , httpOptions)
            .pipe(
                //TODO manage errors
            );
    }

    getUser() {
    }

}