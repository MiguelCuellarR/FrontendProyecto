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

  listaCiudades: CiudadModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  archivo?: File;

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
      alert("Formulario Invalido")
    } else {
      this.subir();
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let descripcion = this.ObtenerFgvalidador.descripcion.value;
      let imagen = this.uploadedFiles[0].name;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;



      let modelo = new ProyectoModelo();
      let archivo: any

      archivo = this.ObtenerFgvalidador.imagen;

      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.imagen = this.uploadedFiles[0].name;
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
      imagen: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }



  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }


  fileChange(element: any) {
    this.uploadedFiles = element.target.files;


  }

  subir() {



     let formData = new FormData();
       for (var i = 0; i < this.uploadedFiles.length; i++) {
         formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
         this.archivo = this.uploadedFiles[i]
       }
       this.servicioProyecto.uploadFile(formData).subscribe((res)=> {
         console.log('response received is ', res);
       });
       




/*
    this.archivo = this.uploadedFiles[0]
    console.log("El archivo a subir es ", this.archivo);

    this.servicioProyecto.subirArchivo(this.archivo).subscribe((res) => {
      console.log('response received is ', res);

    });*/

  }
}









