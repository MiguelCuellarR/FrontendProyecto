import { Component, OnInit } from '@angular/core';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-listar-pais',
  templateUrl: './listar-pais.component.html',
  styleUrls: ['./listar-pais.component.css']
})
export class ListarPaisComponent implements OnInit {

  listaRegitros: PaisModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: PaisService) { }

  ngOnInit(): void {
    this.ObtenerListadoPaises();
  }

  ObtenerListadoPaises() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegitros = datos;
      },
      (error) => {
        alert("Error cargando el listado de registros")
      }
    )
  }


  verificarEliminacion(id?: String, nombre?: String) {

    if (window.confirm("Eliminar el registro de " + nombre + " ?")) {

      let modelo = new PaisModelo();
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

  CambioPagina(pag: number){
    this.pagina = pag;
  }

}
