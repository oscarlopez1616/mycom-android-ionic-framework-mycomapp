import {InvalidDomainFormatException} from "./invalid-domain-format.exception";

export class InvalidLanguageFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}