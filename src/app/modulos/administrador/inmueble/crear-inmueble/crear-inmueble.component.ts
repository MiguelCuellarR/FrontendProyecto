import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { BloqueService } from 'src/app/servicios/bloque.service';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  listaBloques: BloqueModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  constructor(private servicioInmueble: InmuebleService,
     private fb: FormBuilder,
      private servicioBloque: BloqueService,
      private router: Router) { }

  ngOnInit(): void {
    this.LlenarSelectBloques();
    this.construirFormulario();
  }

  LlenarSelectBloques() {
    this.servicioBloque.ListarRegistros().subscribe(
      (datos) => {
        this.listaBloques = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Bloques');
      }
    );
  }


  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let identificador = this.ObtenerFgvalidador.identificador.value;
      let valor = this.ObtenerFgvalidador.valor.value;
      let bloque = this.ObtenerFgvalidador.bloque.value;

      let modelo = new InmuebleModelo();

      modelo.codigo = codigo;
      modelo.identificador = identificador;
      modelo.valor = valor;
      modelo.bloqueId = bloque;

      this.servicioInmueble.AlmacenarRegistro(modelo).subscribe(
        (data: InmuebleModelo) => {
          alert("Datos Correctos")
           this.router.navigate(["/administrador/listar-inmueble"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }


  }


  construirFormulario() {
    this.fgValidador = this.fb.group({
      codigo: ['', [Validators.required]],
      identificador: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      bloque: ['', [Validators.required]],
    });

  }




  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }
}
