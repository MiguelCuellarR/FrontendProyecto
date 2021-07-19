import { Component, OnInit } from '@angular/core';
import { SolicitudEstudioModelo } from 'src/app/modelos/solicitudEstudio.modelo';
import { SolicitudEstudioService } from 'src/app/servicios/solicitud-estudio.service';

@Component({
  selector: 'app-listar-solicitud-estudio',
  templateUrl: './listar-solicitud-estudio.component.html',
  styleUrls: ['./listar-solicitud-estudio.component.css']
})
export class ListarSolicitudEstudioComponent implements OnInit {

  listaRegitros: SolicitudEstudioModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: SolicitudEstudioService) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudesEstudio();
  }

  ObtenerListadoSolicitudesEstudio() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegitros = datos;
      },
      (error) => {
        alert("Error cargando el listado de registros")
      }
    )
  }

  CambioPagina(pag: number){
    this.pagina = pag;
  }

  verificarEliminacion(id?: String, cliente?: String) {
    if (window.confirm("Eliminar el registro de " + cliente + " ?")) {
      let modelo = new SolicitudEstudioModelo();
      modelo.id = id;
      modelo.clienteId = cliente;
      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) => {
          alert("El registro de "+cliente+" Fue eliminado")
          this.listaRegitros= this.listaRegitros.filter(x=> x.id != id)
         }, (error) => {
          alert("Error Eliminando le registro")
        }
      )
    }
  }


}
