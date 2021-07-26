import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  imagenSeleccionada: any;
  listaCiudades: CiudadModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  nombreArchivoCargado: String = "";
  constructor(private servicioCiudad: CiudadService,
    private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
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


  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let documento = this.ObtenerFgvalidador.documento.value;
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let apellido = this.ObtenerFgvalidador.apellido.value;
      let fotografia = this.ObtenerFgvalidador.nombreImagen.value;
      let fechaNac = this.ObtenerFgvalidador.fechaNac.value;
      let correo = this.ObtenerFgvalidador.correo.value;
      let celular = this.ObtenerFgvalidador.celular.value;
      let direccion = this.ObtenerFgvalidador.direccion.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

      let modelo = new ClienteModelo();

      modelo.documento = documento;
      modelo.nombres = nombre;
      modelo.apellidos = apellido;
      modelo.fotografia = fotografia;
      modelo.fec_nacimiento = fechaNac;
      modelo.correo_electronico = correo;
      modelo.num_celular = celular;
      modelo.direccion = direccion;
      modelo.ciudadId = ciudad;



      this.servicioCliente.AlmacenarRegistro(modelo).subscribe(
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
      documento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fotografia: ['', []],
      nombreImagen:['', [Validators.required]],
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



  async subirImagen() {

    const formData = new FormData();
    formData.append('file', this.imagenSeleccionada);
    this.servicioCliente.uploadFile(formData).subscribe(
      (res) => {
        let nombreArchivoCargado = res.filename;
        this.fgValidador.controls.nombreImagen.setValue(nombreArchivoCargado);
      },
      (err) => {
        alert("Error cargando la imagen")
      }
    );


  }


  CuandoSeleccioneImagen(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.imagenSeleccionada = f;
      console.log(f)
    } else {
      this.nombreArchivoCargado = "";
    }
  }
}






