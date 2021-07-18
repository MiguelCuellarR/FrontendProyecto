import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { BloqueService } from 'src/app/servicios/bloque.service';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

  listaBloques: BloqueModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  id: String = "";

  constructor(private servicioInmueble: InmuebleService,
     private fb: FormBuilder,
      private servicioBloque: BloqueService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelectBloques();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicioInmueble.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.codigo.setValue(datos.codigo),
        this.ObtenerFgvalidador.identificador.setValue(datos.identificador),
        this.ObtenerFgvalidador.valor.setValue(datos.valor),
        this.ObtenerFgvalidador.bloque.setValue(datos.bloqueId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
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


  ActualizarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let id = this.ObtenerFgvalidador.id.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let identificador = this.ObtenerFgvalidador.identificador.value;
      let valor = this.ObtenerFgvalidador.valor.value;
      let bloque = this.ObtenerFgvalidador.bloque.value;

      let modelo = new InmuebleModelo();

      modelo.id = id;
      modelo.codigo = codigo;
      modelo.identificador = identificador;
      modelo.valor = valor;
      modelo.bloqueId = bloque;

      this.servicioInmueble.ModificarRegistro(modelo).subscribe(
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
      id: ['', [Validators.required]],
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
