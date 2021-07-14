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

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }


  verificarEliminacion(id?: String, nombre?: String) {

    if (window.confirm("Eliminar el registro de " + nombre + " ?")) {

      let modelo = new UsuarioModelo();
      modelo.id = id;
      modelo.nombres = nombre;

      this.servicioUsuario.EliminarRegistro(modelo).subscribe(

        (datos) => {

          alert("El registro de "+nombre+" Fue eliminado")
          this.listaRegitros= this.listaRegitros.filter(x=> x.id != id)
         }, (error) => {
          alert("Error Eliminando le registro")
        }

      )

    }

  }


  ObtenerListadoUsuarios() {
    this.servicioUsuario.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegitros = datos;
      },
      (error) => {
        alert("Error cargando el listado de registros")
      }
    )
  }

  CambioPagina(pag: number) {
    this.pagina = pag;
  }

}
