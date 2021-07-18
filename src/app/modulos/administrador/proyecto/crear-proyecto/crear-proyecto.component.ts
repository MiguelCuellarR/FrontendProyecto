import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
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
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let descripcion = this.ObtenerFgvalidador.descripcion.value;
      let imagen = this.ObtenerFgvalidador.imagen.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

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
      imagen: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }
}
