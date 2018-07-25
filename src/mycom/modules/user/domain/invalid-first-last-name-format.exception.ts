import {InvalidDomainFormatException} from "../../../shared/domain/invalid-domain-format.exception";

export class InvalidFirstLastNameFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}