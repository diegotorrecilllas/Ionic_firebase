import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncidenciasPage } from './incidencias';

@NgModule({
  declarations: [
    IncidenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(IncidenciasPage),
  ],
})
export class IncidenciasPageModule {}
