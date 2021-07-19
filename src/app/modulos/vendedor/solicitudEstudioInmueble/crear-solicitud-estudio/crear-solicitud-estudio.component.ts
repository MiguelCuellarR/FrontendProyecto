import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { EstadoModelo } from 'src/app/modelos/estado.modelo';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { SolicitudEstudioModelo } from 'src/app/modelos/solicitudEstudio.modelo';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SolicitudEstudioService } from 'src/app/servicios/solicitud-estudio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-solicitud-estudio',
  templateUrl: './crear-solicitud-estudio.component.html',
  styleUrls: ['./crear-solicitud-estudio.component.css']
})
export class CrearSolicitudEstudioComponent implements OnInit {

  listaClientes: ClienteModelo[] = [];
  listaEstados: EstadoModelo[] = [];
  usuario?: String = "";
  listaInmuebles: InmuebleModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});

  constructor(private servicioCliente: ClienteService,
    private servicioSeguridad: SeguridadService,
    private servicioInmueble: InmuebleService,
    private fb: FormBuilder,
    private servicioSolicitud: SolicitudEstudioService,
    private router: Router) { }

  ngOnInit(): void {
    this.LlenarSelectCliente();
    this.LlenarSelectInmueble();
    this.LlenarSelectEstados();
    this.construirFormulario();
    this.getIdUsuario();
  }

  LlenarSelectCliente() {
    this.servicioCliente.ListarRegistros().subscribe(
      (datos) => {
        this.listaClientes = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Clientes');
      }
    );
  }

  obtenerUsuario() {
    return this.servicioSeguridad.ObtenerDatosSesion().subscribe(

    )
  }

  LlenarSelectInmueble() {
    this.servicioInmueble.ListarRegistros().subscribe(
      (datos) => {
        this.listaInmuebles = datos;
        setTimeout(() => {

          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Inmuebles');
      }
    );
  }

  LlenarSelectEstados() {
    this.servicioSolicitud.ListarEstados().subscribe(
      (datos) => {
        this.listaEstados = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Estados');
      }
    );
  }

  getIdUsuario() {

    this.servicioSeguridad.ObtenerDatosSesion().subscribe(

      (datos) => { this.usuario=datos.id},
      (error) => {alert("No se identificó el usuario") }
    );

  }


  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let fecha = this.ObtenerFgvalidador.fecha.value;
      let oferta = this.ObtenerFgvalidador.oferta.value;
      let cliente = this.ObtenerFgvalidador.cliente.value;
      let inmueble = this.ObtenerFgvalidador.inmueble.value;

      let modelo = new SolicitudEstudioModelo();

      modelo.fecha = fecha;
      modelo.oferta_economica = parseInt(oferta);
      modelo.clienteId = cliente;
      modelo.inmuebleId = inmueble;
      modelo.usuarioId = this.usuario

        this.servicioSolicitud.AlmacenarRegistro(modelo).subscribe(
          (data: SolicitudEstudioModelo) => {
            alert("Datos Correctos")
            this.router.navigate(["/vendedor/listar-solicitudestudio"]);

          },
          (error: any) => {
            alert(error.message);
          })
    }
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      fecha: ['', [Validators.required]],
      oferta: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      inmueble: ['', [Validators.required]]
    });
  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

}
