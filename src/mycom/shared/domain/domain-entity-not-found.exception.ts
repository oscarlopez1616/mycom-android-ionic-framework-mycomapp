import {DomainException} from "./domain.exception";

export class DomainEntityNotFoundException extends DomainException{

    constructor(message: string) {
        super(message);
    }

}