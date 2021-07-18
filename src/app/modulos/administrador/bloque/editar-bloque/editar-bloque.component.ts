import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { BloqueService } from 'src/app/servicios/bloque.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-bloque',
  templateUrl: './editar-bloque.component.html',
  styleUrls: ['./editar-bloque.component.css']
})
export class EditarBloqueComponent implements OnInit {

  listaProyectos: ProyectoModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioBloque: BloqueService,
              private fb: FormBuilder,
              private servicioProyecto: ProyectoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelectProyectos();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioBloque.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.codigo.setValue(datos.codigo),
        this.ObtenerFgvalidador.nombre.setValue(datos.nombre),
        this.ObtenerFgvalidador.descripcion.setValue(datos.descripcion),
        this.ObtenerFgvalidador.proyecto.setValue(datos.proyectoId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
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

  ActualizarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let id = this.ObtenerFgvalidador.id.value;
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let descripcion = this.ObtenerFgvalidador.descripcion.value;
      let proyecto = this.ObtenerFgvalidador.proyecto.value;

      let modelo = new BloqueModelo();

      modelo.id = id;
      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.descripcion = descripcion;
      modelo.proyectoId = proyecto;

      this.servicioBloque.ModificarRegistro(modelo).subscribe(
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
      id: ['', [Validators.required]],
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
