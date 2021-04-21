import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSolicitudesComponent } from '../informe/listar-solicitudes/listar-solicitudes.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/crear-informacion-financiera-cliente/crear-informacion-financiera-cliente.component';
import { EditarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/editar-informacion-financiera-cliente/editar-informacion-financiera-cliente.component';
import { EliminarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/eliminar-informacion-financiera-cliente/eliminar-informacion-financiera-cliente.component';
import { ListarInformacionFinancieraClienteComponent } from './informacionFinancieraCliente/listar-informacion-financiera-cliente/listar-informacion-financiera-cliente.component';
import { CrearPagoDelClienteComponent } from './pagoDelCliente/crear-pago-del-cliente/crear-pago-del-cliente.component';
import { EditarPagoDelClienteComponent } from './pagoDelCliente/editar-pago-del-cliente/editar-pago-del-cliente.component';
import { EliminarPagoDelClienteComponent } from './pagoDelCliente/eliminar-pago-del-cliente/eliminar-pago-del-cliente.component';
import { ListarPagoDelClienteComponent } from './pagoDelCliente/listar-pago-del-cliente/listar-pago-del-cliente.component';
import { CrearSolicitudEstudioComponent } from './solicitudEstudioInmueble/crear-solicitud-estudio/crear-solicitud-estudio.component';
import { EditarSolicitudEstudioComponent } from './solicitudEstudioInmueble/editar-solicitud-estudio/editar-solicitud-estudio.component';
import { EliminarSolicitudEstudioComponent } from './solicitudEstudioInmueble/eliminar-solicitud-estudio/eliminar-solicitud-estudio.component';
import { ListarSolicitudEstudioComponent } from './solicitudEstudioInmueble/listar-solicitud-estudio/listar-solicitud-estudio.component';

const routes: Routes = [
  //Cliente
  {
    path: 'cliente/crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'cliente/editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'cliente/listar-cliente',
    component: ListarClienteComponent
  },
  {
    path: 'cliente/eliminar-cliente',
    component: EliminarClienteComponent
  },
  //Informacion Financiera Cliente
  {
    path: 'informacionfinanciera/crear-informacionfinanciera',
    component: CrearInformacionFinancieraClienteComponent
  },
  {
    path: 'informacionfinanciera/editar-informacionfinanciera',
    component: EditarInformacionFinancieraClienteComponent
  },
  {
    path: 'informacionfinanciera/listar-informacionfinanciera',
    component: ListarInformacionFinancieraClienteComponent
  },
  {
    path: 'informacionfinanciera/eliminar-informacionfinanciera',
    component: EliminarInformacionFinancieraClienteComponent
  },
  //Pago del Cliente
  {
    path: 'pago/crear-pago',
    component: CrearPagoDelClienteComponent
  },
  {
    path: 'pago/editar-pago',
    component: EditarPagoDelClienteComponent
  },
  {
    path: 'pago/listar-pago',
    component: ListarPagoDelClienteComponent
  },
  {
    path: 'pago/eliminar-pago',
    component: EliminarPagoDelClienteComponent
  },
  //Solicitud Estudio Inmueble
  {
    path: 'solicitudestudio/crear-solicitudestudio',
    component: CrearSolicitudEstudioComponent
  },
  {
    path: 'solicitudestudio/editar-solicitudestudio',
    component: EditarSolicitudEstudioComponent
  },
  {
    path: 'solicitudestudio/listar-solicitudestudio',
    component: ListarSolicitudEstudioComponent
  },
  {
    path: 'solicitudestudio/eliminar-solicitudestudio',
    component: EliminarSolicitudEstudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
