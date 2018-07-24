import {Observable} from "rxjs/Observable";
import {AddUserCommand} from "../application/add-user.command";

export abstract class UserObservableRepository {
    abstract addUser(dto: AddUserCommand): Observable<any>;
    abstract getUser();
}