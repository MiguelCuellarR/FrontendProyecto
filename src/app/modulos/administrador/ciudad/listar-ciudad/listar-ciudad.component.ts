import { Component, OnInit } from '@angular/core';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {

  listaRegitros: CiudadModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: CiudadService) { }

  ngOnInit(): void {
    this.ObtenerListadoCiudades();
  }



  verificarEliminacion(id?: String, nombre?: String) {

    if (window.confirm("Eliminar el registro de " + nombre + " ?")) {

      let modelo = new CiudadModelo();
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


  ObtenerListadoCiudades() {
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
