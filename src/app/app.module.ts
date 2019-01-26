import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { IncidenciasPage } from '../pages/incidencias/incidencias';
import { MensajeriaPage } from '../pages/mensajeria/mensajeria';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { HistorialdeentregasPage } from '../pages/historialdeentregas/historialdeentregas';

import { SignUpPage } from '../pages/sign-up/sign-up';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {Authentication} from '../service/authentication';
import { firebaseConfig } from '../environments/firebase-config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage,
    InicioPage,
    IncidenciasPage,
    MensajeriaPage,
    SolicitudesPage,
    HistorialdeentregasPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
     AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignUpPage,
    InicioPage,
    IncidenciasPage,
    MensajeriaPage,
    SolicitudesPage,
    HistorialdeentregasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
Authentication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
