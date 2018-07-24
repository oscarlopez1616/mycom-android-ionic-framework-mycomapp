import {AddUserCommand} from "./add-user.command";
import {CityValueObject} from "../../../shared/domain/city.value-object";
import {AddUserService} from "./add-user.service";
import {UserEntity} from "../domain/user.entity";
import {EmailAddressValueObject} from "../domain/email-address.value-object";
import {UserIdValueObject} from "../domain/user-id.value-object";
import {NameValueObject} from "../domain/name.value-object";
import {FirstLastNameValueObject} from "../domain/first-last-name.value-object";
import {SecondLastNameValueObject} from "../domain/second-last-name.value-object";
import {LanguageValueObject} from "../../../shared/domain/language.value-object";
import {CountryValueObject} from "../../../shared/domain/country.value-object";
import {CommandHandler} from "../../../../common/types/command.handler";
import {CompleteNameValueObject} from "../domain/complete-name.value-object";
import {Injectable} from "@angular/core";

@Injectable()
export class AddUserCommandHandler implements CommandHandler{

    private _addUserService: AddUserService;

    constructor(addUserService: AddUserService) {
        this._addUserService = addUserService;
    }

    public handle(command: AddUserCommand): UserEntity {
        this.validate(command);
        let aggregateRootDto = this._addUserService.execute(command);
        var createdAt;
        aggregateRootDto.subscribe(dto => console.log(dto));
        //aggregateRootDto.subscribe(dto => createdAt = dto.createdAt).unsubscribe();
        return new UserEntity(
            new UserIdValueObject(command.id),
            new EmailAddressValueObject(command.emailAddress),
            new CompleteNameValueObject(
                new NameValueObject(command.name),
                new FirstLastNameValueObject(command.firstLastName),
                new SecondLastNameValueObject(command.secondLastName)
            ),
            new LanguageValueObject(command.language),
            new CountryValueObject(command.country),
            new CityValueObject(command.city),
            new Date(createdAt),
            new Date(createdAt)
        );
    }

    private validate(command: AddUserCommand) {
        new EmailAddressValueObject(command.emailAddress);
        new NameValueObject(command.name);
        new FirstLastNameValueObject(command.firstLastName);
        new SecondLastNameValueObject(command.secondLastName);
        new LanguageValueObject(command.language);
        new CountryValueObject(command.country);
        new CityValueObject(command.city);
    }
}