import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  listaCiudades: CiudadModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioCiudad: CiudadService,
     private fb: FormBuilder,
      private servicioCliente: ClienteService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioCliente.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.documento.setValue(datos.documento),
        this.ObtenerFgvalidador.nombre.setValue(datos.nombres),
        this.ObtenerFgvalidador.apellido.setValue(datos.apellidos),
        this.ObtenerFgvalidador.fotografia.setValue(datos.fotografia),
        this.ObtenerFgvalidador.correo.setValue(datos.correo_electronico),
        this.ObtenerFgvalidador.celular.setValue(datos.num_celular),
        this.ObtenerFgvalidador.direccion.setValue(datos.direccion),
        this.ObtenerFgvalidador.fechaNac.setValue(datos.fec_nacimiento),
        this.ObtenerFgvalidador.ciudad.setValue(datos.ciudadId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
  }

  LlenarSelect() {
    this.servicioCiudad.ListarRegistros().subscribe(
      (datos) => {
        this.listaCiudades = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Paises');
      }
    );
  }


  ActualizarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let id = this.ObtenerFgvalidador.id.value;
      let documento = this.ObtenerFgvalidador.documento.value;
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let apellido = this.ObtenerFgvalidador.apellido.value;
      let fotografia = this.ObtenerFgvalidador.fotografia.value;
      let fechaNac = this.ObtenerFgvalidador.fechaNac.value;
      let correo = this.ObtenerFgvalidador.correo.value;
      let celular = this.ObtenerFgvalidador.celular.value;
      let direccion = this.ObtenerFgvalidador.direccion.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

      let modelo = new ClienteModelo();

      modelo.id = id;
      modelo.documento = documento;
      modelo.nombres = nombre;
      modelo.apellidos = apellido;
      modelo.fotografia = fotografia;
      modelo.fec_nacimiento = fechaNac;
      modelo.correo_electronico = correo;
      modelo.num_celular = celular;
      modelo.direccion = direccion;
      modelo.ciudadId = ciudad;



      this.servicioCliente.ModificarRegistro(modelo).subscribe(
        (data: ClienteModelo) => {
          alert("Datos Correctos")
           this.router.navigate(["/vendedor/listar-cliente"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }


  }


  construirFormulario() {
    this.fgValidador = this.fb.group({
      id: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fotografia: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
      fechaNac: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],

    });

  }




  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }


}
