import {InvalidDomainFormatException} from "../../../shared/domain/invalid-domain-format.exception";

export class InvalidEmailAddressFormatException extends InvalidDomainFormatException {

    constructor(message: string) {
        super(message);
    }

}