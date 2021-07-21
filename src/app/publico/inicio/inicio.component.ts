import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imagenModelo } from 'src/app/modelos/imagen.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  proyectos: ProyectoModelo[] = [];

  constructor(
    private photoService: SeguridadService,
    private router: Router,
    private servicioProyecto:ProyectoService
  ) {



  }



  ngOnInit(): void {
this.getProyectos();
  }


  getProyectos() {
    this.servicioProyecto.ListarRegistros()
    .subscribe(
      res => {
        this.proyectos = res;

      },
      err => console.log(err)
    )
  }

}
