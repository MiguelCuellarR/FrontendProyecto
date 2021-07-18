import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { BloqueService } from 'src/app/servicios/bloque.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-bloque',
  templateUrl: './crear-bloque.component.html',
  styleUrls: ['./crear-bloque.component.css']
})
export class CrearBloqueComponent implements OnInit {

  listaProyectos: ProyectoModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});

  constructor(private servicioBloque: BloqueService,
              private fb: FormBuilder,
              private servicioProyecto: ProyectoService,
              private router: Router) { }

  ngOnInit(): void {
    this.LlenarSelectProyectos();
    this.construirFormulario();
    console.log(this.listaProyectos)
  }

  LlenarSelectProyectos() {
    this.servicioProyecto.ListarRegistros().subscribe(
      (datos) => {
        this.listaProyectos = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Proyectos');
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
      let proyecto = this.ObtenerFgvalidador.proyecto.value;

      let modelo = new BloqueModelo();

      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.descripcion = descripcion;
      modelo.proyectoId = proyecto;

      this.servicioBloque.AlmacenarRegistro(modelo).subscribe(
        (data: BloqueModelo) => {
          alert("Datos Correctos")
           this.router.navigate(["/administrador/listar-bloque"]);

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
      proyecto: ['', [Validators.required]]
    });
  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }
  
}
