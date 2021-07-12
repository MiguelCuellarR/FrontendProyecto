import { Component, OnInit } from '@angular/core';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  
  listaRegitros: UsuarioModelo[] = [];
  pagina: number = 1;

  constructor(private servicio: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }

  ObtenerListadoUsuarios() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegitros = datos;
      },
      (error) => {
        alert("Error cargando el listado de registros")
      }
    )
  }

  CambioPagina(pag: number){
    this.pagina = pag;
  }

}
