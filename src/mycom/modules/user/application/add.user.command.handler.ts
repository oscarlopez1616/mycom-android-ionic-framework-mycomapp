import {AddUserCommand} from "./add.user.command";
import {City} from "../../shared/domain/city";
import {AddUserService} from "./add.user.service";
import {User} from "../domain/user";
import {EmailAddress} from "../domain/email.address";
import {UserId} from "../domain/user.id";
import {Name} from "../domain/name";
import {FirstLastName} from "../domain/first.last.name";
import {SecondLastName} from "../domain/second.last.name";
import {Language} from "../../shared/domain/language";
import {Country} from "../../shared/domain/country";
import {CommandHandler} from "../../common/types/command.handler";
import {CompleteName} from "../domain/complete.name";


export class AddUserCommandHandler implements CommandHandler{

    private _addUserService: AddUserService;

    constructor(addUserService: AddUserService) {
        this._addUserService = addUserService;
    }

    public handle(command: AddUserCommand): User {
        this.validate(command);
        let aggregateRootDto = this._addUserService.execute(command);
        var createdAt;
        aggregateRootDto.subscribe(dto => createdAt = dto.createdAt).unsubscribe();
        return new User(
            new UserId(command.userId),
            new EmailAddress(command.emailAddress),
            new CompleteName(
                new Name(command.name),
                new FirstLastName(command.firstLastName),
                new SecondLastName(command.secondLastName)
            ),
            new Language(command.language),
            new Country(command.country),
            new City(command.city),
            new Date(createdAt),
            new Date(createdAt)
        );
    }

    private validate(command: AddUserCommand) {
        UserId.create();
        new EmailAddress(command.emailAddress);
        new Name(command.name);
        new FirstLastName(command.firstLastName);
        new SecondLastName(command.secondLastName);
        new Language(command.language);
        new Country(command.country);
        new City(command.city);
    }
}