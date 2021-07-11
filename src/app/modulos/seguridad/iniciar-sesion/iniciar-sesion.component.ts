  import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import * as crypto from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  
  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      correo: ['miguel.1701823659@ucaldas.edu.co', [Validators.required, Validators.email]],
      clave: ['98765', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

  IdentificarUsuario() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let usuario = this.ObtenerFgvalidador.correo.value;
      let clave = this.ObtenerFgvalidador.clave.value;

      let modelo = new UsuarioModelo();
      modelo.correo_electronico = usuario;
      modelo.contrasena = crypto.MD5(clave).toString();

      this.servicioSeguridad.identificarUsuario(modelo).subscribe(
        (data: UsuarioModelo) => {
          alert("Datos Correctos")
          this.servicioSeguridad.AlmacenarDatosSesionEnLocal(data)
          this.router.navigate(["/inicio"]);

        },
        (error: any) => {
          alert("Datos invalidos");
          console.log(error);
        })
    }


  }

}
