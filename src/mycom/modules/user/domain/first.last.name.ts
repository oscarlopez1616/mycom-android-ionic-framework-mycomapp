import {InvalidFirstLastNameFormatException} from "./invalid.first.last.name.format.exception";


export class FirstLastName {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string): void {
        this.guard(value);
        this._value = value;
    }

    private guard(value: string): void {
        this.guardNotEmpty(value);
    }

    private guardNotEmpty(value: string): void{
        let regex = /^.*$/;
        if(!regex.test(value.toLowerCase())){
            throw new InvalidFirstLastNameFormatException();
        }
    }


    public value(): string {
        return this._value;
    }
}
