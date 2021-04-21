import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';
import { ResetearContraseniaComponent } from './resetear-contrasenia/resetear-contrasenia.component';

@NgModule({
  declarations: [
    IniciarSesionComponent,
    CerrarSesionComponent,
    CambiarContraseniaComponent,
    ResetearContraseniaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
