import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ResetearContraseniaComponent } from './resetear-contrasenia/resetear-contrasenia.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent
  },
  {
    path: 'cambiar-contrasenia',
    component: CambiarContraseniaComponent
  },
  {
    path: 'resetear-contrasenia',
    component: ResetearContraseniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
