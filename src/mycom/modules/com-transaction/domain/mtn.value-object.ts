import {CountryValueObject} from "../../../shared/domain/country.value-object";

const enum operationType {
    operation = 10,
    transfer = 20
}

export class MtnValueObject {
    private _country: CountryValueObject;
    private _operationType: string;
    private _date: Date;

    private constructor(country: CountryValueObject, operationType: string, date: Date) {
        this._country = country;
        this._operationType = operationType;
        this._date = date;
    }

    public static createFromString(mtn: string): MtnValueObject{

        return this.constructor(
            new CountryValueObject(),
            operationType.operation,
            new Date()
        );
    }

    public mtn(): string{
        return this._country+this._operationType+this._date;
    }


}
