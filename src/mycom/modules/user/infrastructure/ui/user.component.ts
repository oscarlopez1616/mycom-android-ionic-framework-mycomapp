import {Component} from '@angular/core';
import {AddUserCommandHandler} from "../../application/add.user.command.handler";
import {UserId} from "../../domain/user.id";
import {AddUserService} from "../../application/add.user.service";
import {RxjsObservableRepository} from "../persistence/rxjs/RxjsObservableRepository";
import {UserObservableRepository} from "../../domain/userObservableRepository";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [AddUserCommandHandler, AddUserService,RxjsObservableRepository, {
        provide: UserObservableRepository,
        useExisting: RxjsObservableRepository
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
                id: UserId.create().value(),
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