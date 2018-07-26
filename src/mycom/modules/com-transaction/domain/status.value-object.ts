const enum mntState {
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
        this.constructor(mntState.transactionInitialized);
    }

    public static createTransactionReady() {
        this.constructor(mntState.transactionReady);
    }

    public static createTransactionSuccess() {
        this.constructor(mntState.transactionSuccess);
    }

    public value(): string {
        return this._value;
    }
}
