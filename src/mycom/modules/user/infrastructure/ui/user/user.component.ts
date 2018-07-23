import {Component} from '@angular/core';
import {AddUserCommandHandler} from "../../../application/add.user.command.handler";
import {UserId} from "../../../domain/user.id";
import {AddUserService} from "../../../application/add.user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [AddUserCommandHandler],
    styles: ['.error {color: red;}']
})
export class UserComponent {
    error: any;
    headers: string[];

    constructor(private addUserCommandHandler: AddUserCommandHandler) {
    }

    public addBalance(): void {
        let command = {
                userId: UserId.create(),
                emailAddress: 'oscar.lopez@mycom.global',
                name: 'oscar',
                firstLastName: 'lopez',
                secondLastName: 'labrador',
                language: 'ES',
                country: 'ES',
                city: 'BCN',
            }
        ;
        //console.log(this.addUserCommandHandler.handle(command));
        console.log(command);
    }

}