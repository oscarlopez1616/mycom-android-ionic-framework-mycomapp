import {CommandHandler} from "../../../../common/types/command.handler";
import {Injectable} from "@angular/core";
import {ScanQrCommand} from "./scan-qr.command";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Injectable()
export class ScanQrCommandHandler implements CommandHandler {

    private _barcodeScanner: BarcodeScanner;

    constructor(barcodeScanner: BarcodeScanner) {
        this._barcodeScanner = barcodeScanner;
    }

    public handle(command: ScanQrCommand): string {

        var code;
        this._barcodeScanner.scan().then(barcodeData => {
            code = barcodeData;
        }).catch(err => {
            code = err;
        });
        code = 'desde el handler';
        return code;
    }
}