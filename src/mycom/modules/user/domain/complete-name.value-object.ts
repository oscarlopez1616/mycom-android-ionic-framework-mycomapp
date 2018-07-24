import {NameValueObject} from "./name.value-object";
import {FirstLastNameValueObject} from "./first-last-name.value-object";
import {SecondLastNameValueObject} from "./second-last-name.value-object";


export class CompleteNameValueObject {
    readonly name: NameValueObject;
    readonly firstLastName: FirstLastNameValueObject;
    readonly secondLastName: SecondLastNameValueObject;

    constructor(name: NameValueObject, firstLastName: FirstLastNameValueObject, secondLastName: SecondLastNameValueObject) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
    }
}
