import {NameValueObject} from "./name.value-object";
import {FirstLastNameValueObject} from "./first-last-name.value-object";
import {SecondLastNameValueObject} from "./second-last-name.value-object";


export class CompleteNameValueObject {
    private _name: NameValueObject;
    private _firstLastName: FirstLastNameValueObject;
    private _secondLastName: SecondLastNameValueObject;

    constructor(name: NameValueObject, firstLastName: FirstLastNameValueObject, secondLastName: SecondLastNameValueObject) {
        this._name = name;
        this._firstLastName = firstLastName;
        this._secondLastName = secondLastName;
    }


    public name(): NameValueObject {
        return this._name;
    }

    public firstLastName(): FirstLastNameValueObject {
        return this._firstLastName;
    }

    public secondLastName(): SecondLastNameValueObject {
        return this._secondLastName;
    }
}
