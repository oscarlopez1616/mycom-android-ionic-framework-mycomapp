import {AggregateRoot} from "../../../../common/types/aggregate.root";
import {CanNotSetMtnAlreadyInitializedException} from "./can-not-set-mtn-already-initialized.exception";
import {TransactionIdValueObject} from "./transaction-id.value-object";
import {StatusValueObject} from "./status.value-object";
import {MtnValueObject} from "./mtn.value-object";

export class ComTransactionEntity extends AggregateRoot {

    private _id: TransactionIdValueObject;
    private _statusValueObject: StatusValueObject;
    private _mtnValueObject: MtnValueObject|null;


    constructor(createdAt: Date, updatedAt: Date, id: TransactionIdValueObject, statusValueObject: StatusValueObject, mtnValueObject?: MtnValueObject) {
        super(createdAt, updatedAt);
        this._id = id;
        this._statusValueObject = statusValueObject;
        this._mtnValueObject = mtnValueObject;
    }

    public id(): TransactionIdValueObject {
        return this._id;
    }

    public statusValueObject(): StatusValueObject {
        return this._statusValueObject;
    }

    public mtnValueObject(): MtnValueObject|null {
        return this._mtnValueObject;
    }

    public initMtnValueObject(value: MtnValueObject | null): void {
        if(this._mtnValueObject !== null){
            throw new CanNotSetMtnAlreadyInitializedException(value.mtn());
        }
            this._mtnValueObject = value;
    }
}