import {InvalidCityFormatException} from "./invalid.city.format.exception";

export class City {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string) {
        this.guard(value);
        this._value = value;
    }

    private guard(value: string): void {
        return this.guardThreeCapitalizedWords(value);
    }

    private guardThreeCapitalizedWords(value: string): void {
        let regex = /^[A-Z]{3}$/;
        regex.test(value);
        if (!regex.test(value)) {
            throw new InvalidCityFormatException();
        }
    }

    public value(): string {
        return this._value;
    }
}
