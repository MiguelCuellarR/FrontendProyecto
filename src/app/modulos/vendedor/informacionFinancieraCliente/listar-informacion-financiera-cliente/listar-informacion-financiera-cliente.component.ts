import { Component, OnInit } from '@angular/core';
import { InformacionFinancieraModelo } from 'src/app/modelos/informacionFinanciera.modelo';
import { InformacionFinancieraService } from 'src/app/servicios/informacion-financiera.service';

@Component({
  selector: 'app-listar-informacion-financiera-cliente',
  templateUrl: './listar-informacion-financiera-cliente.component.html',
  styleUrls: ['./listar-informacion-financiera-cliente.component.css']
})
export class ListarInformacionFinancieraClienteComponent implements OnInit {

  
  listaRegitros: InformacionFinancieraModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: InformacionFinancieraService) { }

  ngOnInit(): void {
    this.ObtenerListadoInformacionesFinancieras();
  }

  ObtenerListadoInformacionesFinancieras() {
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
      let modelo = new InformacionFinancieraModelo();
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
