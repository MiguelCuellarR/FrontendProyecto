import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoModelo } from 'src/app/modelos/pago.modelo';
import { SolicitudEstudioModelo } from 'src/app/modelos/solicitudEstudio.modelo';
import { PagoService } from 'src/app/servicios/pago.service';
import { SolicitudEstudioService } from 'src/app/servicios/solicitud-estudio.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-pago-del-cliente',
  templateUrl: './editar-pago-del-cliente.component.html',
  styleUrls: ['./editar-pago-del-cliente.component.css']
})
export class EditarPagoDelClienteComponent implements OnInit {

  listaSolicitudesEstudio: SolicitudEstudioModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioSolEst: SolicitudEstudioService,
     private fb: FormBuilder,
      private servicioPago: PagoService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioPago.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.comprobante.setValue(datos.comprobante),
        this.ObtenerFgvalidador.valor.setValue(datos.valor),
        this.ObtenerFgvalidador.solicitud.setValue(datos.solicitudEstudioId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
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
        alert('Error listando Solicitudes de Estudio');
      }
    );
  }


  ActualizarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let id = this.ObtenerFgvalidador.id.value;
      let comprobante = this.ObtenerFgvalidador.comprobante.value;
      let valor = this.ObtenerFgvalidador.valor.value;
      let solicitud = this.ObtenerFgvalidador.solicitud.value;
    
      let modelo = new PagoModelo();

      modelo.id = id; 
      modelo.comprobante = comprobante;
      modelo.valor = valor;
      modelo.solicitudEstudioId = solicitud;
    
      this.servicioPago.ModificarRegistro(modelo).subscribe(
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
      id: ['', [Validators.required]],
      comprobante: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      solicitud: ['', [Validators.required]],
    });

  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

}
