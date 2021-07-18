import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { ProyectoModelo } from '../modelos/proyecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
              private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<ProyectoModelo[]>{
    return this.http.get<ProyectoModelo[]>(`${this.urlb}/proyectos`);
  }

  BuscarRegistro(id: String): Observable<ProyectoModelo>{
    return this.http.get<ProyectoModelo>(`${this.urlb}/proyectos/${id}`);
  }

  AlmacenarRegistro(modelo: ProyectoModelo): Observable<ProyectoModelo> {
    return this.http.post<ProyectoModelo>(`${this.urlb}/proyectos`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        imagen: modelo.imagen,
        ciudad: modelo.ciudadId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: ProyectoModelo): Observable<ProyectoModelo> {
    return this.http.put<ProyectoModelo>(`${this.urlb}/proyectos/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        imagen: modelo.imagen,
        ciudad: modelo.ciudadId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: ProyectoModelo): Observable<ProyectoModelo> {
    return this.http.delete<ProyectoModelo>(`${this.urlb}/proyectos/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
        
      });
  }
}
