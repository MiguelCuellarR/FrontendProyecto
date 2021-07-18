import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { RolModelo } from 'src/app/modelos/rol.modelo';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({});
  listaRoles: RolModelo[] = [];
  listaCiudades: CiudadModelo[] = [];
  id: String = "";

  constructor(private fb: FormBuilder,
              private servicio: UsuarioService, 
              private servicioCiudades: CiudadService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.LlenarSelectRoles();
    this.LlenarSelectCiudades();
    this.construirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicio.BuscarRegistro(this.id).subscribe(
      (datos) => {
        this.ObtenerFgvalidador.id.setValue(datos.id),
        this.ObtenerFgvalidador.nombre.setValue(datos.nombres),
        this.ObtenerFgvalidador.apellido.setValue(datos.apellidos),
        this.ObtenerFgvalidador.documento.setValue(datos.documento),
        this.ObtenerFgvalidador.correo.setValue(datos.correo_electronico),
        this.ObtenerFgvalidador.celular.setValue(datos.telefono_celular),
        this.ObtenerFgvalidador.rol.setValue(datos.rolUsuarioId),
        this.ObtenerFgvalidador.ciudad.setValue(datos.ciudadId)
      },
      (error) => {
        alert("No se encuentra el registro")
      }
    )
  }

  construirFormulario() {
    this.fgValidador = this.fb.group({
      id: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });

  }


  ActualizarRegistro() {
    if (this.fgValidador.invalid) {
      alert("Formulario Invalido")
    } else {
      let id = this.ObtenerFgvalidador.id.value;
      let nombre = this.ObtenerFgvalidador.nombre.value;
      let apellido = this.ObtenerFgvalidador.apellido.value;
      let documento = this.ObtenerFgvalidador.documento.value;
      let correo = this.ObtenerFgvalidador.correo.value;
      let telefono = this.ObtenerFgvalidador.celular.value;
      let rol = this.ObtenerFgvalidador.rol.value;
      let ciudad = this.ObtenerFgvalidador.ciudad.value;

      let modelo = new UsuarioModelo();

      modelo.id = id;
      modelo.nombres = nombre;
      modelo.apellidos = apellido;
      modelo.documento = documento.toString();
      modelo.correo_electronico = correo;
      modelo.telefono_celular = telefono;
      modelo.rolUsuarioId = rol;
      modelo.ciudadId = ciudad;


      this.servicio.ModificarRegistro(modelo).subscribe(
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
