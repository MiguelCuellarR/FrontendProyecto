import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { imagenModelo } from 'src/app/modelos/imagen.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  imagenSeleccionada: any;
  listaCiudades: CiudadModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  archivo?: File;
  nombreArchivoCargado: String = "";

  uploadedFiles: Array<File> = [];


  constructor(private servicioCiudad: CiudadService,
    private fb: FormBuilder,
    private servicioProyecto: ProyectoService,
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
        alert('Error listando Ciudades');
      }
    );
  }

  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido, fíjese que se hubiese cargado la imagen y llenado todos los campos.")
    } else {
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let descripcion = this.ObtenerFgvalidador.descripcion.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;
      let imagen = this.ObtenerFgvalidador.nombreImagen.value;



      let modelo = new ProyectoModelo();


      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.imagen = imagen;
      modelo.descripcion = descripcion;
      modelo.ciudadId = ciudad;



      this.servicioProyecto.AlmacenarRegistro(modelo).subscribe(
        (data: ProyectoModelo) => {
          alert("Datos Correctos")
          this.router.navigate(["/administrador/listar-proyecto"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', []],
      nombreImagen:['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }



  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }


  async subirImagen() {

    const formData = new FormData();
    formData.append('file', this.imagenSeleccionada);
    this.servicioProyecto.uploadFile(formData).subscribe(
      (res) => {
        let nombreArchivoCargado = res.filename;
        this.fgValidador.controls.nombreImagen.setValue(nombreArchivoCargado);
      },
      (err) => {
        alert("Error cargando la imagen")
      }
    );


  }


  CuandoSeleccioneImagen(event:any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.imagenSeleccionada = f;
      console.log(f)
    }else{
      this.nombreArchivoCargado = "";
    }
  }
}









