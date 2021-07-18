import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  listaCiudades: CiudadModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioCiudad: CiudadService,
     private fb: FormBuilder,
      private servicioProyecto: ProyectoService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelect();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioProyecto.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.codigo.setValue(datos.codigo),
        this.ObtenerFgvalidador.nombre.setValue(datos.nombre),
        this.ObtenerFgvalidador.descripcion.setValue(datos.descripcion),
        this.ObtenerFgvalidador.imagen.setValue(datos.imagen),
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
        alert('Error listando Ciudades');
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
      let imagen = this.ObtenerFgvalidador.imagen.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

      let modelo = new ProyectoModelo();

      modelo.id = id;
      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.imagen = imagen;
      modelo.descripcion = descripcion;
      modelo.ciudadId = ciudad;

      this.servicioProyecto.ModificarRegistro(modelo).subscribe(
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
      id: ['', [Validators.required]],
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