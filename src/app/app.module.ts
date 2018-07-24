import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MycomCustomerApp} from './app.component';

import {HomePage} from '../mycom/modules/tab.menu.home/infrastructure/ui/tab.pages/home/home';
import {TabsPage} from '../mycom/modules/tab.menu.home/infrastructure/ui/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {UserComponent} from "../mycom/modules/user/infrastructure/ui/user.component";

@NgModule({
    declarations: [
        MycomCustomerApp,
        HomePage,
        TabsPage,
        UserComponent
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
