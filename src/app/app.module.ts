import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MycomCustomerApp} from './app.component';

import {HomePage} from '../code/infrastructure/ui/pages/home/home';
import {TabsPage} from '../code/infrastructure/ui/pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {BalanceComponent} from "../code/infrastructure/ui/balance/balance.component";

@NgModule({
    declarations: [
        MycomCustomerApp,
        HomePage,
        TabsPage,
        BalanceComponent
    ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header',
        }),
        IonicModule.forRoot(MycomCustomerApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MycomCustomerApp,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
