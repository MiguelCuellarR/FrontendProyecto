import { Component, OnInit } from '@angular/core';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent implements OnInit {

  listaRegitros: InmuebleModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: InmuebleService) { }

  ngOnInit(): void {
    this.ObtenerListadoInmuebles();
  }

  ObtenerListadoInmuebles() {
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

  verificarEliminacion(id?: String, identificador?: Number) {
    if (window.confirm("Eliminar el registro de " + identificador + " ?")) {
      let modelo = new InmuebleModelo();
      modelo.id = id;
      modelo.identificador = identificador;

      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) => {

          alert("El registro de "+identificador+" Fue eliminado")
          this.listaRegitros= this.listaRegitros.filter(x=> x.id != id)
         }, (error) => {
          alert("Error Eliminando le registro")
        }
      )
    }
  }
}
