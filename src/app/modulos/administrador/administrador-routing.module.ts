import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearBloqueComponent } from './bloque/crear-bloque/crear-bloque.component';
import { EditarBloqueComponent } from './bloque/editar-bloque/editar-bloque.component';
import { EliminarBloqueComponent } from './bloque/eliminar-bloque/eliminar-bloque.component';
import { ListarBloqueComponent } from './bloque/listar-bloque/listar-bloque.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearPaisComponent } from './pais/crear-pais/crear-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { EliminarPaisComponent } from './pais/eliminar-pais/eliminar-pais.component';
import { ListarPaisComponent } from './pais/listar-pais/listar-pais.component';
import { CrearProyectoComponent } from './proyecto/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto/editar-proyecto.component';
import { EliminarProyectoComponent } from './proyecto/eliminar-proyecto/eliminar-proyecto.component';
import { ListarProyectoComponent } from './proyecto/listar-proyecto/listar-proyecto.component';

const routes: Routes = [
  //Pais
  {
    path: 'pais/crear-pais',
    component: CrearPaisComponent
  },
  {
    path: 'pais/editar-pais',
    component: EditarPaisComponent
  },
  {
    path: 'pais/listar-pais',
    component: ListarPaisComponent
  },
  {
    path: 'pais/eliminar-pais',
    component: EliminarPaisComponent
  },
  //Ciudad
  {
    path: 'ciudad/crear-ciudad',
    component: CrearCiudadComponent
  },
  {
    path: 'ciudad/editar-ciudad',
    component: EditarCiudadComponent
  },
  {
    path: 'ciudad/listar-ciudad',
    component: ListarCiudadComponent
  },
  {
    path: 'ciudad/eliminar-ciudad',
    component: EliminarCiudadComponent
  },
  //Proyecto
  {
    path: 'proyecto/crear-proyecto',
    component: CrearProyectoComponent
  },
  {
    path: 'proyecto/editar-proyecto',
    component: EditarProyectoComponent
  },
  {
    path: 'proyecto/listar-proyecto',
    component: ListarProyectoComponent
  },
  {
    path: 'proyecto/eliminar-proyecto',
    component: EliminarProyectoComponent
  },
  //Bloque
  {
    path: 'bloque/crear-bloque',
    component: CrearBloqueComponent
  },
  {
    path: 'bloque/editar-bloque',
    component: EditarBloqueComponent
  },
  {
    path: 'bloque/listar-bloque',
    component: ListarBloqueComponent
  },
  {
    path: 'bloque/eliminar-bloque',
    component: EliminarBloqueComponent
  },
  //Inmueble
  {
    path: 'inmueble/crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'inmueble/editar-inmueble',
    component: EditarInmuebleComponent
  },
  {
    path: 'inmueble/listar-inmueble',
    component: ListarInmuebleComponent
  },
  {
    path: 'inmueble/eliminar-inmueble',
    component: EliminarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
