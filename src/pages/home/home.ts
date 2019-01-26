import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Authentication} from '../../service/authentication';
import {InicioPage} from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private auth: Authentication) {

  }
  createAccountWithGoogle(){
    this.auth.createUserWithGoogle();


  }

  otraPagina(h){
  this.navCtrl.setRoot(InicioPage);
  }
}
