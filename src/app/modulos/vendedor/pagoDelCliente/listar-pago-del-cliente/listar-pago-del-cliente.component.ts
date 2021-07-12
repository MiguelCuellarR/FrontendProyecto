import { Component, OnInit } from '@angular/core';
import { PagoModelo } from 'src/app/modelos/pago.modelo';
import { PagoService } from 'src/app/servicios/pago.service';

@Component({
  selector: 'app-listar-pago-del-cliente',
  templateUrl: './listar-pago-del-cliente.component.html',
  styleUrls: ['./listar-pago-del-cliente.component.css']
})
export class ListarPagoDelClienteComponent implements OnInit {

  listaRegitros: PagoModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: PagoService) { }

  ngOnInit(): void {
    this.ObtenerListadoPagos();
  }

  ObtenerListadoPagos() {
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
