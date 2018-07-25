import {DomainException} from "./domain.exception";

export class InvalidDomainFormatException extends DomainException {

    constructor(message: string) {
        super(message);
    }

}