import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  listaRegitros: ClienteModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoClientes();
  }

  ObtenerListadoClientes() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegitros = datos;
        console.log(this.listaRegitros)
      },
      (error) => {
        alert("Error cargando el listado de registros")
      }
    )
  }

  CambioPagina(pag: number){
    this.pagina = pag;
  }

  verificarEliminacion(id?: String, documento?: Number) {
    if (window.confirm("Eliminar el registro de " + documento + " ?")) {
      let modelo = new ClienteModelo();
      modelo.id = id;
      modelo.documento = documento;
      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) => {
          alert("El registro de "+documento+" Fue eliminado")
          this.listaRegitros= this.listaRegitros.filter(x=> x.id != id)
         }, (error) => {
          alert("Error Eliminando le registro")
        }
      )
    }
  }

}
