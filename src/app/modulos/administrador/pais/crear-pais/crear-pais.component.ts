import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisModelo } from 'src/app/modelos/pais.modelo';

@Component({
  selector: 'app-crear-pais',
  templateUrl: './crear-pais.component.html',
  styleUrls: ['./crear-pais.component.css'],
})
export class CrearPaisComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

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

  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  get obtenerFGV() {
    return this.fgValidacion.controls;
  }
}
