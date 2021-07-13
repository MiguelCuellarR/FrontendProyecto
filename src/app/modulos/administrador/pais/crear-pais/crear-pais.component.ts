import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { PaisService } from 'src/app/servicios/pais.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-pais',
  templateUrl: './crear-pais.component.html',
  styleUrls: ['./crear-pais.component.css'],
})
export class CrearPaisComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private servicio: PaisService,
    private seguridad: SeguridadService) { }

  construirFormulario() {
    this.fgValidacion = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
    });
  }

  EnviarPais() {
    let nombre = this.obtenerFGV.nombre.value;
    let codigo = this.obtenerFGV.codigo.value;

    let model = new PaisModelo();
    model.nombre = nombre;
    model.codigo = codigo;

    this.servicio.AlmacenarRegistro(model).subscribe(

      (datos) => {

        alert("pais almacenado")

      },
      (error: any) => {
        alert("no se almaceno")

      }

    );

  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  get obtenerFGV() {
    return this.fgValidacion.controls;
  }
}
