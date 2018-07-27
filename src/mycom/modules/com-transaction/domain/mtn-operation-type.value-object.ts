import {InvalidMtnOperationTypeFormatException} from "./invalid-Mtn-Operation-Type-format.exception";

export interface ValidMtnOperationType {
    codeNumber: number;
    codeString: string;
}

export const ValidMtnOperationTypeCollection = [
    {codeNumber: 10, codeString: 'SALEABLE'},
    {codeNumber: 20, codeString: 'TRANSFERABLE'}
];

export class MtnOperationTypeValueObject {
    private _value: ValidMtnOperationType;

    constructor(value: number) {
        this.setValue(value);
    }

    private setValue(value: number): void {
        this._value = this.extractValueAndGuardIsAValidMtnOperationType(value);
    }

    private extractValueAndGuardIsAValidMtnOperationType(value: number): ValidMtnOperationType {
        for (let ValidMtnOperationType of ValidMtnOperationTypeCollection) {
            if (ValidMtnOperationType.codeNumber === value) {
                return {
                    codeNumber: ValidMtnOperationType.codeNumber,
                    codeString: ValidMtnOperationType.codeString
                };
            }
        }
        throw new InvalidMtnOperationTypeFormatException(value.toString());
    }


    public value(): ValidMtnOperationType {
        return this._value;
    }
}
