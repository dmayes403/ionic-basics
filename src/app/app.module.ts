import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/users/user/user';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        UsersPage,
        UserPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp) // <-- this is used to configure our
        // app so that ionic wraps around it
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        UsersPage,
        UserPage
    ], // <-- this allows us to create an instance of a component. Each
    // page must be registered here
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
