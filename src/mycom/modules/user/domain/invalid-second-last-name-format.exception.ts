import {InvalidDomainFormatException} from "../../../shared/domain/invalid-domain-format.exception";

export class InvalidSecondLastNameFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}