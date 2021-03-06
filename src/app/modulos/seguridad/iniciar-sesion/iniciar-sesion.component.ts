import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import * as crypto from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public resolved(captchaResponse: string): void {} 

  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

/*Admin
miguel.1701823659@ucaldas.edu.co
98765

Vendedor
miguelcuellaromero@gmail.com
0qAu5HN091Zn
*/ 

  construirFormulario() {
    this.fgValidador = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
      recaptchaReactive: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

  nuevaContrasena() {
    this.router.navigate(["/seguridad/cambiar-contrasenia"])
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
