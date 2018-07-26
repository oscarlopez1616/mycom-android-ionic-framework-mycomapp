const enum state {
    transactionInitialized = 'transactionInitialized',
    transactionReady = 'transactionReady',
    transactionSuccess = 'transactionSuccess'
}

export class StatusValueObject {
    private _value: string;

    private constructor(value: string) {
        this._value = value;
    }

    public static createTransactionInitialized() {
        this.constructor(state.transactionInitialized);
    }

    public static createTransactionReady() {
        this.constructor(state.transactionReady);
    }

    public static createTransactionSuccess() {
        this.constructor(state.transactionSuccess);
    }

    public value(): string {
        return this._value;
    }
}
