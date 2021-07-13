import { Component, OnInit } from '@angular/core';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { RolModelo } from 'src/app/modelos/rol.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

declare var InicializarSelect: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  constructor(private servicio: UsuarioService) {}

  listaRoles: RolModelo[] = [];
  ngOnInit(): void {
    this.servicio.ListarRoles().subscribe(
      (datos) => {
        this.listaRoles = datos;
        console.log(this.listaRoles);
      },
      (error) => {
        alert('Error listando Roles');
      }
    );
    setTimeout(InicializarSelect(), 100);
  }

  ObtenerRoles() {
    // después de asignar datos a listaRoles poner lo siguiente: setTimeout(InicializarSelect(), 1000);
    setTimeout(InicializarSelect(), 1000);
  }
}
