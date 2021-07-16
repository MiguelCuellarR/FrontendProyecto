import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';
import { ResetearContraseniaComponent } from './resetear-contrasenia/resetear-contrasenia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    IniciarSesionComponent,
    CerrarSesionComponent,
    CambiarContraseniaComponent,
    ResetearContraseniaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule
  ]
})
export class SeguridadModule { }
