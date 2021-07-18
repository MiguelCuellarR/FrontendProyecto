import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { PaisService } from 'src/app/servicios/pais.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  listaPaises: PaisModelo[] = [];
  fgValidador: FormGroup = this.fb.group({});
  constructor(private servicioPais: PaisService,
     private fb: FormBuilder,
      private servicioCiudad: CiudadService,
      private router: Router) { }

  ngOnInit(): void {

    this.LlenarSelectPaises();
    this.construirFormulario();
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


  crearRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let codigo = this.ObtenerFgvalidador.codigo.value;
      let pais = this.ObtenerFgvalidador.pais.value;

      let modelo = new CiudadModelo();


      modelo.codigo = codigo;
      modelo.nombre = nombre;
      modelo.paisId = pais;



      this.servicioCiudad.AlmacenarRegistro(modelo).subscribe(
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
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      pais: ['', [Validators.required]]
    });

  }




  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }



}
