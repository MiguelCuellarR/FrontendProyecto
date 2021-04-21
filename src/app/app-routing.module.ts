import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorModule } from './modulos/administrador/administrador.module';
import { InformeModule } from './modulos/informe/informe.module';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { VendedorModule } from './modulos/vendedor/vendedor.module';
import { Error404Component } from './publico/errores/error404/error404.component';
import { InicioComponent } from './publico/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(() => SeguridadModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(() => UsuarioModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./modulos/administrador/administrador.module').then(() => AdministradorModule)
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./modulos/vendedor/vendedor.module').then(() => VendedorModule)
  },
  {
    path: 'informe',
    loadChildren: () => import('./modulos/informe/informe.module').then(() => InformeModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
