import {InvalidDomainFormatException} from "./invalid-domain-format.exception";

export class InvalidCityFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}