import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { InformacionFinancieraModelo } from 'src/app/modelos/informacionFinanciera.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { InformacionFinancieraService } from 'src/app/servicios/informacion-financiera.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-informacion-financiera-cliente',
  templateUrl: './editar-informacion-financiera-cliente.component.html',
  styleUrls: ['./editar-informacion-financiera-cliente.component.css']
})
export class EditarInformacionFinancieraClienteComponent implements OnInit {

  
  listaClientes: ClienteModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioInfoFinanciera: InformacionFinancieraService,
     private fb: FormBuilder,
      private servicioCliente: ClienteService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioInfoFinanciera.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.trabajo.setValue(datos.datos_trabajo),
        this.ObtenerFgvalidador.tiempoTrabajo.setValue(datos.tiempo_trabajo_actual),
        this.ObtenerFgvalidador.totalIngresos.setValue(datos.total_ingresos),
        this.ObtenerFgvalidador.nombreRefFam.setValue(datos.nombre_ref_familiar),
        this.ObtenerFgvalidador.telRefFam.setValue(datos.telefono_ref_familiar),
        this.ObtenerFgvalidador.nombreRefPer.setValue(datos.nombre_ref_personal),
        this.ObtenerFgvalidador.telRefPer.setValue(datos.telefono_ref_personal),
        this.ObtenerFgvalidador.cliente.setValue(datos.clienteId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      id: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      tiempoTrabajo: ['', [Validators.required]],
      totalIngresos: ['', [Validators.required]],
      nombreRefFam: ['', [Validators.required]],
      telRefFam: ['', [Validators.required]],
      nombreRefPer: ['', [Validators.required]],
      telRefPer: ['', [Validators.required]],
      cliente: ['', [Validators.required]],

    });

  }

  LlenarSelect() {
    this.servicioCliente.ListarRegistros().subscribe(
      (datos) => {
        this.listaClientes = datos;
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
      let id = this.ObtenerFgvalidador.id.value;
      let trabajo = this.ObtenerFgvalidador.trabajo.value;
      let tiempoTrabajo = this.ObtenerFgvalidador.tiempoTrabajo.value;
      let totalIngresos = this.ObtenerFgvalidador.totalIngresos.value;
      let nombreRefFam = this.ObtenerFgvalidador.nombreRefFam.value;
      let telRefFam = this.ObtenerFgvalidador.telRefFam.value;
      let nombreRefPer = this.ObtenerFgvalidador.nombreRefPer.value;
      let telRefPer = this.ObtenerFgvalidador.telRefPer.value;
      let cliente = this.ObtenerFgvalidador.cliente.value;

      let modelo = new InformacionFinancieraModelo();

      modelo.id = id;
      modelo.datos_trabajo = trabajo;
      modelo.tiempo_trabajo_actual = tiempoTrabajo;
      modelo.total_ingresos = totalIngresos;
      modelo.nombre_ref_familiar = nombreRefFam;
      modelo.telefono_ref_familiar = telRefFam;
      modelo.nombre_ref_personal = nombreRefPer;
      modelo.telefono_ref_personal = telRefPer;
      modelo.clienteId = cliente;



      this.servicioInfoFinanciera.ModificarRegistro(modelo).subscribe(
        (data: InformacionFinancieraModelo) => {
          alert("Datos Correctos")
           this.router.navigate(["/vendedor/listar-informacionfinanciera"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }


  }


  




  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

}
