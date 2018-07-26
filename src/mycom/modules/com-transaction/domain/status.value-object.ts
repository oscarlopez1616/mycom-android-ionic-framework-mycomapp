const enum state {
    preTransaction = 1,
    transactionSuccess = 0
}

export class StatusValueObject {
    private _value: string;

    private constructor(value: string) {
        this._value = value;
    }

    public static createPreTransactionStatus() {
        this.constructor(state.preTransaction);
    }

    public static createTransactionSuccess() {
        this.constructor(state.transactionSuccess);
    }

    public value(): string {
        return this._value;
    }
}
