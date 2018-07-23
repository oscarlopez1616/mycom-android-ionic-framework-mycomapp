import {InvalidNameFormatException} from "./invalid.name.format.exception";


export class Name {
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
        let regex = /^.$/;
        if(!regex.test(value.toLowerCase())){
            throw new InvalidNameFormatException();
        }
    }


    public value(): string {
        return this._value;
    }
}
