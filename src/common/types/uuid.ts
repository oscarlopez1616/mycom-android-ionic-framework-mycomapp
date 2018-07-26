import {v4 as uuid} from 'uuid';
import {InvalidUuidFormatException} from "../exceptions/invalid-uuid-format.exception";

export class Uuid {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string) {
        this.guardValue(value);
        this._value = value;
    }

    private guardValue(value: string): void{
        this.guardIsUuid(value);
    }


    private guardIsUuid(value: string): void{
        //TODO check string is a valid uuid, if not throw InvalidUuidFormatException
        if(true) {
            throw new InvalidUuidFormatException(value);
        }
    }

    public static create(): Uuid {
        return new Uuid(uuid());
    }

    public value(): string {
        return this._value;
    }
}
