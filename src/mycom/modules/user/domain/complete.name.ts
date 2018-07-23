import {Name} from "./name";
import {FirstLastName} from "./first.last.name";
import {SecondLastName} from "./second.last.name";


export class CompleteName {
    private _name: Name;
    private _firstLastName: FirstLastName;
    private _secondLastName: SecondLastName;

    constructor(name: Name, firstLastName: FirstLastName, secondLastName: SecondLastName) {
        this._name = name;
        this._firstLastName = firstLastName;
        this._secondLastName = secondLastName;
    }


    public name(): Name {
        return this._name;
    }

    firstLastName(): FirstLastName {
        return this._firstLastName;
    }

    public secondLastName(): SecondLastName {
        return this._secondLastName;
    }
}
