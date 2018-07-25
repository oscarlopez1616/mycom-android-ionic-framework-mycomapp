export abstract class AggregateRoot {
    private _createdAt: Date | null;
    private _updatedAt: Date | null;

    protected constructor(createdAt?: Date, updatedAt?: Date) {
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    public createdAt(): Date | null {
        return this._createdAt;
    }

    public updatedAt(): Date | null {
        return this._updatedAt;
    }


    public changeUpdatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }

}
