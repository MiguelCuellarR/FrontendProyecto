import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrls: ['./cambiar-contrasenia.component.css']
})
export class CambiarContraseniaComponent implements OnInit {


  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }


  nuevaContrasena() {
    let correo = this.ObtenerFgvalidador.correo.value;
    this.servicioSeguridad.reenviarContraseña(correo).subscribe(
      (data: any) => {
        alert("Si el correo proporcionado existe, le enviaremos una nueva contraseña al telefono registrado")
        this.router.navigate(["/inicio"]);

      },
      (error: any) => {
        alert("Datos invalidos");
        console.log(error);
      });
    

  }

  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });

  }

  ngOnInit(): void {

    this.construirFormulario();

  }

}
