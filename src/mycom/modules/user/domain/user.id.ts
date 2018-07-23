import {Uuid} from "../../shared/domain/uuid";


export class UserId extends Uuid {
    constructor(value: string) {
        super(value);
    }
}
