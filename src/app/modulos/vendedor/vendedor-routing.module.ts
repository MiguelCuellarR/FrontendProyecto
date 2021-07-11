import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'listar-cliente',
    component: ListarClienteComponent
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent
  },
  //Informacion Financiera Cliente
  {
    path: 'crear-informacionfinanciera',
    component: CrearInformacionFinancieraClienteComponent
  },
  {
    path: 'editar-informacionfinanciera',
    component: EditarInformacionFinancieraClienteComponent
  },
  {
    path: 'listar-informacionfinanciera',
    component: ListarInformacionFinancieraClienteComponent
  },
  {
    path: 'eliminar-informacionfinanciera',
    component: EliminarInformacionFinancieraClienteComponent
  },
  //Pago del Cliente
  {
    path: 'crear-pago',
    component: CrearPagoDelClienteComponent
  },
  {
    path: 'editar-pago',
    component: EditarPagoDelClienteComponent
  },
  {
    path: 'listar-pago',
    component: ListarPagoDelClienteComponent
  },
  {
    path: 'eliminar-pago',
    component: EliminarPagoDelClienteComponent
  },
  //Solicitud Estudio Inmueble
  {
    path: 'crear-solicitudestudio',
    component: CrearSolicitudEstudioComponent
  },
  {
    path: 'editar-solicitudestudio',
    component: EditarSolicitudEstudioComponent
  },
  {
    path: 'listar-solicitudestudio',
    component: ListarSolicitudEstudioComponent
  },
  {
    path: 'eliminar-solicitudestudio',
    component: EliminarSolicitudEstudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
