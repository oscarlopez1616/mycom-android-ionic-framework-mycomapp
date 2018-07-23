import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {AddUserCommand} from "./add.user.command";
import {AggregateRootDto} from "../../common/dto/aggregate.root.dto";

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

    public execute(command: AddUserCommand): Observable<AggregateRootDto> {
        return this.http.post<AggregateRootDto>(this.urlEndpoint, command , httpOptions)
            .pipe(
                //TODO manage errors
            );
    }

}