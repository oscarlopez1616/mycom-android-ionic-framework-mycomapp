import {DomainException} from "../../../shared/domain/domain.exception";

export class CanNotSetMtnAlreadyInitializedException extends DomainException{

    constructor(message: string) {
        super(message);
    }

}