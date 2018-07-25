import {InvalidNameFormatException} from "./invalid-name-format.exception";


export class NameValueObject {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string): void {
        this.guardValue(value);
        this._value = value;
    }

    private guardValue(value: string): void {
        this.guardNotEmpty(value);
    }

    private guardNotEmpty(value: string): void{
        let regex = /^.*$/;
        if(!regex.test(value.toLowerCase())){
            throw new InvalidNameFormatException(value);
        }
    }


    public value(): string {
        return this._value;
    }
}
