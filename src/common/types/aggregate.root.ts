export abstract class AggregateRoot {
    readonly createdAt: Date;
    private _updatedAt: Date;

    protected constructor(createdAt: Date, updatedAt: Date) {
        this.createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    public updatedAt(): Date {
        return this._updatedAt;
    }

    public changeUpdatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }
}