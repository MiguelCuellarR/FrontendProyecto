import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { RolModelo } from 'src/app/modelos/rol.modelo';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],

})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({});
  listaRoles: RolModelo[] = [];
  listaCiudades: CiudadModelo[] = [];
  constructor(private fb: FormBuilder, private servicio: UsuarioService, private servicioCiudades: CiudadService
    ,private router: Router) { }


  ngOnInit(): void {
    this.LlenarSelectRoles();
    this.LlenarSelectCiudades();
    this.construirFormulario();
  }


  construirFormulario() {
    this.fgValidador = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });

  }


  IdentificarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let apellido = this.ObtenerFgvalidador.apellido.value;
      let documento = this.ObtenerFgvalidador.documento.value;
      let correo = this.ObtenerFgvalidador.correo.value;
      let telefono = this.ObtenerFgvalidador.celular.value;
      let rol = this.ObtenerFgvalidador.rol.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

      let modelo = new UsuarioModelo();


      modelo.nombres = nombre;
      modelo.apellidos = apellido;
      modelo.documento = documento;
      modelo.correo_electronico = correo;
      modelo.telefono_celular = telefono;
      modelo.rolUsuarioId = rol;
      modelo.ciudadId = ciudad;


      this.servicio.AlmacenarRegistro(modelo).subscribe(
        (data: UsuarioModelo) => {
          alert("Datos Correctos")
          this.router.navigate(["/usuario/listar-usuario"]);

        },
        (error: any) => {
          alert(error.message);
        })
    }


  }



  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }



  LlenarSelectRoles() {
    this.servicio.ListarRoles().subscribe(
      (datos) => {
        this.listaRoles = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Roles');
      }
    );
  }



  LlenarSelectCiudades() {
    this.servicioCiudades.ListarRegistros().subscribe(
      (datos) => {
        this.listaCiudades = datos;
        setTimeout(() => {
          InicializarSelect();
        }, 500);
      },
      (error) => {
        alert('Error listando Roles');
      }
    );
  }

}
