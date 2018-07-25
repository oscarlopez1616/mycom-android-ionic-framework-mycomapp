import {InvalidDomainFormatException} from "./invalid-domain-format.exception";

export class InvalidTimeWindowFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}