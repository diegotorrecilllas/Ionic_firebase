import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeriaPage } from './mensajeria';

@NgModule({
  declarations: [
    MensajeriaPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeriaPage),
  ],
})
export class MensajeriaPageModule {}
