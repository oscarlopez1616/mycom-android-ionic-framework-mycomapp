import {InvalidEmailAddressFormatException} from "./invalid-email-address-format.exception";

export class QrCodeValueObject {
    private _value: string;
    private _timeWindow: TimeWindowValueObject;

    constructor(value: string, startDate: Date, endDate: Date) {
        this.setValue(value);
    }

    private setValue(value: string): void {
        this.guard(value);
        this._value = value;
    }

    private setTimeWindow(startDate: Date, endDate: Date): void{
        this.guard();
        this.
    }

    private guard(value: string): void {
        this.guardIsAnEmail(value);
    }

    private guardIsA(value: string) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(value.toLowerCase())) {
            throw new InvalidEmailAddressFormatException();
        }
    }


    public value(): string {
        return this._value;
    }
}
