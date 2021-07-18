import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { PaisService } from 'src/app/servicios/pais.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {

  listaPaises: PaisModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioPais: PaisService,
    private fb: FormBuilder,
    private servicioCiudad: CiudadService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelectPaises();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioCiudad.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.codigo.setValue(datos.codigo),
        this.ObtenerFgvalidador.nombre.setValue(datos.nombre),
        this.ObtenerFgvalidador.pais.setValue(datos.paisId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
  }

  LlenarSelectPaises() {
    this.servicioPais.ListarRegistros().subscribe(
      (datos) => {
        this.listaPaises = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Roles');
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
      let pais = this.ObtenerFgvalidador.pais.value;

      let modelo = new CiudadModelo();

      modelo.id = id;
      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.paisId = pais;

      this.servicioCiudad.ModificarRegistro(modelo).subscribe(
        (data: CiudadModelo) => {
          alert("Datos Correctos")
          this.router.navigate(["/administrador/listar-ciudad"]);

        },
        (error: any) => {
          alert(error.message);

          alert(modelo.paisId)
        })
    }
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      pais: ['', [Validators.required]]
    });

  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

}