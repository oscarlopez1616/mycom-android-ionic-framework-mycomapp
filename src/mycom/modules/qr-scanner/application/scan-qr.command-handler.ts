import {CommandHandler} from "../../../../common/types/command.handler";
import {Injectable} from "@angular/core";
import {ScanQrCommand} from "./scan-qr.command";
import {BarcodeScanner, BarcodeScanResult} from "@ionic-native/barcode-scanner";

@Injectable()
export class ScanQrCommandHandler implements CommandHandler {

  private _barcodeScanner: BarcodeScanner;

  constructor(barcodeScanner: BarcodeScanner) {
    this._barcodeScanner = barcodeScanner;
  }

  public handle(command: ScanQrCommand): Promise<BarcodeScanResult> {
    return this._barcodeScanner.scan(      {
      preferFrontCamera : false,
      showTorchButton : true, // iOS and Android
      prompt : "Scanea tu codigo de Pago MyCom", // Android
      resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    });
  }
}
