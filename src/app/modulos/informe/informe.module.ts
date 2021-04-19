import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { PagoPorClienteComponent } from './pago-por-cliente/pago-por-cliente.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { ProyectosPorCiudadComponent } from './proyectos-por-ciudad/proyectos-por-ciudad.component';
import { ProyectosPorPaisComponent } from './proyectos-por-pais/proyectos-por-pais.component';


@NgModule({
  declarations: [
    PagoPorClienteComponent,
    ListarSolicitudesComponent,
    ProyectosPorCiudadComponent,
    ProyectosPorPaisComponent
  ],
  imports: [
    CommonModule,
    InformeRoutingModule
  ]
})
export class InformeModule { }
