import {InvalidTimeWindowFormatException} from "./invalid-time-window-format.exception";

export class TimeWindowValueObject {
    private _startDate: Date;
    private _endDate: Date;


    constructor(startDate: Date, endDate: Date) {
        this.setStartDate(startDate);
        this.setEndDate(startDate,endDate);
    }

    private setStartDate(startDate: Date): void {
        this.guardStartDate(startDate);
        this._startDate = startDate;
    }

    private guardStartDate(startDate: Date): void {
        this.guardIsDate(startDate);
    }

    private setEndDate(startDate: Date,endDate: Date): void {
        this.guardEndDate(startDate,endDate);
        this._endDate = endDate;
    }

    private guardEndDate(startDate: Date,endDate: Date): void {
        this.guardIsDate(startDate);
        this.guardEndDateIsBiggerThanStartDate(startDate,endDate);
    }

    private guardIsDate(date: Date): void {
        if (date.constructor.name === "Date") {
            throw new InvalidTimeWindowFormatException(date.toDateString());
        }
    }

    private guardEndDateIsBiggerThanStartDate(startDate: Date, endDate: Date): void{
        if(!(endDate > startDate)){
            throw new InvalidTimeWindowFormatException(endDate.toDateString()+'not is more greater than '+startDate.toDateString());
        }
    }


    public startDate(): string {
        return this.startDate();
    }

    public endDate(): string {
        return this.endDate();
    }
}