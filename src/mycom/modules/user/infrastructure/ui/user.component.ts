import {Component} from '@angular/core';
import {AddUserCommandHandler} from "../../application/add-user.command-handler";
import {UserIdValueObject} from "../../domain/user-id.value-object";
import {AddUserService} from "../../application/add-user.service";
import {UserObservableRepository} from "../../domain/user.observable-repository";
import {RxjsUserObservableRepository} from "../persistence/rxjs/rxjs-user-observable-repository.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [AddUserCommandHandler, AddUserService,RxjsUserObservableRepository, {
        provide: UserObservableRepository,
        useExisting: RxjsUserObservableRepository
    }],
    styles: ['.error {color: red;}']
})
export class UserComponent {
    error: any;
    headers: string[];

    constructor(private addUserCommandHandler: AddUserCommandHandler) {
    }

    public addUser(): void {
        let command = {
                id: UserIdValueObject.create().value(),
                emailAddress: 'oscar.lopez@mycom.global',
                name: 'oscar',
                firstLastName: 'lopez',
                secondLastName: 'labrador',
                language: 'ES',
                country: 'ES',
                city: 'BCN',
            }
        ;
        this.addUserCommandHandler.handle(command);
    }

}