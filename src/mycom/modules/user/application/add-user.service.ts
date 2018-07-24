import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AddUserCommand} from "./add-user.command";
import {UserObservableRepository} from "../domain/user.observable-repository";

@Injectable()
export class AddUserService {

    private  _observableRepository: UserObservableRepository;

    constructor(observableRepository: UserObservableRepository) {
        this._observableRepository = observableRepository;
    }

    public execute(command: AddUserCommand): Observable<any> {
        return this._observableRepository.addUser(command);
    }


    /*public execute(command: AddUserCommand): Observable<AggregateRootDto> {
        return this.http.post<AggregateRootDto>(this.urlEndpoint, command , httpOptions)
            .pipe(
                //TODO manage errors
            );
    }*/

}