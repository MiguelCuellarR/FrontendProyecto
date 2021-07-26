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


  administradorDescarga(datos?: any, nombre?: String): void {

    const dataType=datos.type;
    const binaryData=[];
    binaryData.push(datos);

    const filePath = window.URL.createObjectURL(new Blob(binaryData,{type:dataType}));
    const downloadLink=document.createElement('a');
    downloadLink.href=filePath;
    downloadLink.setAttribute('download','');
    document.body.appendChild(downloadLink);
    downloadLink.click();


  }

  descargar(comprobante?: String) {


    this.servicio.descargarArchivo(comprobante).subscribe(
      (datos) => {
        alert("descarga correcta")
        this.administradorDescarga(datos,comprobante);
      },
      (error) => {
        alert("error descargando el archivo")
        console.log(error);

      }
    )


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

  CambioPagina(pag: number) {
    this.pagina = pag;
  }

  verificarEliminacion(id?: String, comprobante?: String) {
    if (window.confirm("Eliminar el registro de " + comprobante + " ?")) {
      let modelo = new PagoModelo();
      modelo.id = id;
      modelo.comprobante = comprobante;
      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) => {
          alert("El registro de " + comprobante + " Fue eliminado")
          this.listaRegitros = this.listaRegitros.filter(x => x.id != id)
        }, (error) => {
          alert("Error Eliminando le registro")
        }
      )
    }
  }

}
