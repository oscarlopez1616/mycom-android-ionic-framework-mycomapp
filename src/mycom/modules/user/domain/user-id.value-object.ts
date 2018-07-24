import {Uuid} from "../../../../common/types/uuid";


export class UserIdValueObject extends Uuid {
    constructor(value: string) {
        super(value);
    }
}

