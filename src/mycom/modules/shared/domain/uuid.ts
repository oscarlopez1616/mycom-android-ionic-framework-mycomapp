import {v4 as uuid} from 'uuid';

export class Uuid {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string) {
        //TODO check string is a valid uuid, if not throw InvalidUuidFormatException
        this._value = uuid.fromString(value);
    }

    public static create(): Uuid {
        return uuid();
    }

    public value(): string {
        return this._value;
    }
}
