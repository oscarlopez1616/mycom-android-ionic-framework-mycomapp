import {Uuid} from "../../../../common/types/uuid";


export class TransactionIdValueObject extends Uuid {
    constructor(value: string) {
        super(value);
    }
}

