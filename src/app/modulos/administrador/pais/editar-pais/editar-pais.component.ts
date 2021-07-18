import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-editar-pais',
  templateUrl: './editar-pais.component.html',
  styleUrls: ['./editar-pais.component.css']
})
export class EditarPaisComponent implements OnInit {

  fgValidacion: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private fb: FormBuilder,
    private servicio: PaisService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicio.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.obtenerFGV.id.setValue(datos.id),
        this.obtenerFGV.codigo.setValue(datos.codigo),
        this.obtenerFGV.nombre.setValue(datos.nombre)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
  }

  get obtenerFGV() {
    return this.fgValidacion.controls;
  }

  construirFormulario() {
    this.fgValidacion = this.fb.group({
      id: ['', Validators.required],
      codigo: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  ActualizarPais() {
    let id = this.obtenerFGV.id.value;
    let nombre = this.obtenerFGV.nombre.value;
    let codigo = this.obtenerFGV.codigo.value;

    let model = new PaisModelo();
    model.id = id;
    model.nombre = nombre;
    model.codigo = codigo;

    this.servicio.ModificarRegistro(model).subscribe(

      (datos) => {

        alert("pais almacenado")
        this.router.navigate(["/administrador/listar-pais"]);

      },
      (error: any) => {
        alert("No se almaceno")

      }

    );

  }



}
