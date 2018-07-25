import {Component} from '@angular/core';
import {AddUserCommandHandler} from "../../application/add-user.command-handler";
import {UserIdValueObject} from "../../domain/user-id.value-object";
import {AddUserService} from "../../application/add-user.service";
import {UserObservableRepository} from "../../domain/user.observable-repository";
import {RxjsUserObservableRepository} from "../persistence/rxjs/rxjs-user-observable-repository.service";
import {ScanQrCommandHandler} from "../../../com-transaction/application/scan-qr.command-handler";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [AddUserCommandHandler, AddUserService, RxjsUserObservableRepository, {
        provide: UserObservableRepository,
        useExisting: RxjsUserObservableRepository
    }, ScanQrCommandHandler, BarcodeScanner],
    styles: ['.error {color: red;} p']
})
export class UserComponent {
    error: any;
    headers: string[];
    private _addUserCommandHandler: AddUserCommandHandler;
    private _scanQrCommandHandler: ScanQrCommandHandler;
    private _code : string;

    constructor(addUserCommandHandler: AddUserCommandHandler, scanQrCommandHandler: ScanQrCommandHandler) {
        this._addUserCommandHandler = addUserCommandHandler;
        this._scanQrCommandHandler = scanQrCommandHandler;
        this._code = 'nothing';
    }

    public addUser(): void {
        let command = {
                id: UserIdValueObject.create().value(),
                emailAddress: 'oscar.lopez@mycom.global',
                name: 'oscar',
                firstLastName: 'lopez',
                secondLastName: 'labrador',
                language: 'ES',
                country: 'ES',
                city: 'BCN',
            }
        ;
        this._addUserCommandHandler.handle(command);
    }

    public scanCodeQr() {
        let command = {
            idAction: 'testActivity'
        }
        this._scanQrCommandHandler.handle(command).then(barcodeData => {
          this._code = barcodeData.text;
        }).catch(err => {
          this._code = err.toString();
        });
    }

}
