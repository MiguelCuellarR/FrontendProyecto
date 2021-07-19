import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagoModelo } from 'src/app/modelos/pago.modelo';
import { SolicitudEstudioModelo } from 'src/app/modelos/solicitudEstudio.modelo';
import { PagoService } from 'src/app/servicios/pago.service';
import { SolicitudEstudioService } from 'src/app/servicios/solicitud-estudio.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-pago-del-cliente',
  templateUrl: './crear-pago-del-cliente.component.html',
  styleUrls: ['./crear-pago-del-cliente.component.css']
})
export class CrearPagoDelClienteComponent implements OnInit {

  listaSolicitudesEstudio: SolicitudEstudioModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  constructor(private servicioSolEst: SolicitudEstudioService,
     private fb: FormBuilder,
      private servicioPago: PagoService,
      private router: Router) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
  }

  LlenarSelect() {
    this.servicioSolEst.ListarRegistros().subscribe(
      (datos) => {
        this.listaSolicitudesEstudio = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Paises');
      }
    );
  }


  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let comprobante = this.ObtenerFgvalidador.comprobante.value;
      let valor = this.ObtenerFgvalidador.valor.value;
      let solicitud = this.ObtenerFgvalidador.solicitud.value;
    
      let modelo = new PagoModelo();

      modelo.comprobante = comprobante;
      modelo.valor = valor;
      modelo.solicitudEstudioId = solicitud;
    
      this.servicioPago.AlmacenarRegistro(modelo).subscribe(
        (data: PagoModelo) => {
          alert("Datos Correctos")
           this.router.navigate(["/vendedor/listar-pago"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }


  }


  construirFormulario() {
    this.fgValidador = this.fb.group({
      comprobante: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      solicitud: ['', [Validators.required]],
    });

  }




  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

}
