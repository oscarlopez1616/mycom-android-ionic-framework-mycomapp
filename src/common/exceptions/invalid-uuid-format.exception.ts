import {InvalidDomainFormatException} from "../../mycom/shared/domain/invalid-domain-format.exception";


export class InvalidUuidFormatException extends InvalidDomainFormatException{

    constructor(message: string) {
        super(message);
    }

}