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
