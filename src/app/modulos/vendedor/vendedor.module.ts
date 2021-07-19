import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/listar-informacion-financiera-cliente/listar-informacion-financiera-cliente.component';
import { CrearInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/crear-informacion-financiera-cliente/crear-informacion-financiera-cliente.component';
import { EditarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/editar-informacion-financiera-cliente/editar-informacion-financiera-cliente.component';
import { EliminarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/eliminar-informacion-financiera-cliente/eliminar-informacion-financiera-cliente.component';
import { ListarSolicitudEstudioComponent } from './solicitudEstudioInmueble/listar-solicitud-estudio/listar-solicitud-estudio.component';
import { CrearSolicitudEstudioComponent } from './solicitudEstudioInmueble/crear-solicitud-estudio/crear-solicitud-estudio.component';
import { EditarSolicitudEstudioComponent } from './solicitudEstudioInmueble/editar-solicitud-estudio/editar-solicitud-estudio.component';
import { EliminarSolicitudEstudioComponent } from './solicitudEstudioInmueble/eliminar-solicitud-estudio/eliminar-solicitud-estudio.component';
import { ListarPagoDelClienteComponent } from './pagoDelCliente/listar-pago-del-cliente/listar-pago-del-cliente.component';
import { CrearPagoDelClienteComponent } from './pagoDelCliente/crear-pago-del-cliente/crear-pago-del-cliente.component';
import { EditarPagoDelClienteComponent } from './pagoDelCliente/editar-pago-del-cliente/editar-pago-del-cliente.component';
import { EliminarPagoDelClienteComponent } from './pagoDelCliente/eliminar-pago-del-cliente/eliminar-pago-del-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    ListarInformacionFinancieraClienteComponent,
    CrearInformacionFinancieraClienteComponent,
    EditarInformacionFinancieraClienteComponent,
    EliminarInformacionFinancieraClienteComponent,
    ListarSolicitudEstudioComponent,
    CrearSolicitudEstudioComponent,
    EditarSolicitudEstudioComponent,
    EliminarSolicitudEstudioComponent,
    ListarPagoDelClienteComponent,
    CrearPagoDelClienteComponent,
    EditarPagoDelClienteComponent,
    EliminarPagoDelClienteComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VendedorModule { }
