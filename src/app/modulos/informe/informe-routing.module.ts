import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { PagoPorClienteComponent } from './pago-por-cliente/pago-por-cliente.component';
import { ProyectosPorCiudadComponent } from './proyectos-por-ciudad/proyectos-por-ciudad.component';
import { ProyectosPorPaisComponent } from './proyectos-por-pais/proyectos-por-pais.component';

const routes: Routes = [
  {
    path: 'listar-solicitudes',
    component: ListarSolicitudesComponent
  },
  {
    path: 'pago-por-cliente',
    component: PagoPorClienteComponent
  },
  {
    path: 'proyectos-por-ciudad',
    component: ProyectosPorCiudadComponent
  },
  {
    path: 'proyectos-por-pais',
    component: ProyectosPorPaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
