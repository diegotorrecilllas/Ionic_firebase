import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { IncidenciasPage } from '../pages/incidencias/incidencias';
import { MensajeriaPage } from '../pages/mensajeria/mensajeria';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { HistorialdeentregasPage } from '../pages/historialdeentregas/historialdeentregas';

import {Authentication} from '../service/authentication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
invitedPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,public auth: Authentication, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Inicio', component: InicioPage },
      { title: 'Incidencias', component: IncidenciasPage },
        { title: 'Mensajería', component: MensajeriaPage },
          { title: 'Solicitudes', component: SolicitudesPage },
            { title: 'Historial de entregas', component: HistorialdeentregasPage },



    ];

    this.invitedPages = [
      { title: 'Iniciar sesión', component: HomePage },
     { title: 'Crear cuenta', component: SignUpPage }

    ];
  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }
  logoutOfGoogle(){
  this.auth.logoutOfGoogle();


  }


}
