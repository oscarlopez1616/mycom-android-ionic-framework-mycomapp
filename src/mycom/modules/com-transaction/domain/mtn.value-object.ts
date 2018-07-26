import {CountryValueObject} from "../../../shared/domain/country.value-object";


export class MtnValueObject {
    private _country: CountryValueObject;
    private _operationType: string;
    private _date: Date;

    private constructor(country: CountryValueObject, operationType: string, date: Date) {
        this._country = country;
        this._operationType = operationType;
        this._date = date;
    }

    public static createFromString(mtn: string): MtnValueObject {
        let year = parseInt(mtn.substring(4, 8));
        let month = parseInt(mtn.substring(8, 10));
        let date = parseInt(mtn.substring(10, 12));
        let hours = parseInt(mtn.substring(12, 14));
        let minutes = parseInt(mtn.substring(14, 16));
        let seconds = parseInt(mtn.substring(16, 18));
        return new MtnValueObject(
            new CountryValueObject(mtn.substring(0, 2)),
            mtn.substring(2, 4),
            new Date(year, month, date, hours, minutes, seconds)
        );
    }

    public mtn(): string {
        return this._country + this._operationType + this._date;
    }

}
