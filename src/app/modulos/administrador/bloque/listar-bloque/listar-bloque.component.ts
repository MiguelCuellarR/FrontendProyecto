import { Component, OnInit } from '@angular/core';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { BloqueService } from 'src/app/servicios/bloque.service';

@Component({
  selector: 'app-listar-bloque',
  templateUrl: './listar-bloque.component.html',
  styleUrls: ['./listar-bloque.component.css']
})
export class ListarBloqueComponent implements OnInit {

  listaRegitros: BloqueModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: BloqueService) { }

  ngOnInit(): void {
    this.ObtenerListadoBloques();
  }

  verificarEliminacion(id?: String, nombre?: String) {
    if (window.confirm("Eliminar el registro de " + nombre + " ?")) {
      let modelo = new BloqueModelo();
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

  ObtenerListadoBloques() {
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
