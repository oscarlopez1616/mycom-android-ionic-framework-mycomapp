import {InvalidDomainFormatException} from "../../../shared/domain/invalid-domain-format.exception";

export class InvalidNameFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}