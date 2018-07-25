import {InvalidDomainFormatException} from "./invalid-domain-format.exception";

export class InvalidCountryFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}