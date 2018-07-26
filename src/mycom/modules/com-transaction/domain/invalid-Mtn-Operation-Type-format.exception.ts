import {InvalidDomainFormatException} from "../../../shared/domain/invalid-domain-format.exception";

export class InvalidMtnOperationTypeFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}