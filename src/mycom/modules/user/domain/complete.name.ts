import {Name} from "./name";
import {FirstLastName} from "./first.last.name";
import {SecondLastName} from "./second.last.name";


export class CompleteName {
    readonly name: Name;
    readonly firstLastName: FirstLastName;
    readonly secondLastName: SecondLastName;

    constructor(name: Name, firstLastName: FirstLastName, secondLastName: SecondLastName) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
    }
}
