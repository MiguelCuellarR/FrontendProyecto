import { Component, OnInit } from '@angular/core';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent implements OnInit {

  
  listaRegitros: ProyectoModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: ProyectoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProyectos();
  }

  verificarEliminacion(id?: String, nombre?: String) {
    if (window.confirm("Eliminar el registro de " + nombre + " ?")) {
      let modelo = new ProyectoModelo();
      modelo.id = id;
      modelo.nombre = nombre;

      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) => {
          alert("El registro de "+nombre+" Fue eliminado")
          this.listaRegitros= this.listaRegitros.filter(x=> x.id != id)
         }, (error) => {
          alert("Error Eliminando le registro")
        }
      )
    }
  }

  ObtenerListadoProyectos() {
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

}
