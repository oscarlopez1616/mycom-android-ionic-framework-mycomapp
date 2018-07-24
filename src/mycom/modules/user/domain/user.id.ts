import {Uuid} from "../../../../common/types/uuid";


export class UserId extends Uuid {
    constructor(value: string) {
        super(value);
    }
}

