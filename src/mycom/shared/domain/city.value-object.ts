import {InvalidCityFormatException} from "./invalid.city.format.exception";

export class CityValueObject {
    private _value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string) {
        this.guardValue(value);
        this._value = value;
    }

    private guardValue(value: string): void {
        return this.guardThreeCapitalizedWords(value);
    }

    private guardThreeCapitalizedWords(value: string): void {
        let regex = /^[A-Z]{3}$/;
        if (!regex.test(value)) {
            throw new InvalidCityFormatException(value);
        }
    }

    public value(): string {
        return this._value;
    }
}
