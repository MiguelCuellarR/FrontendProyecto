import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mode } from 'crypto-js';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { imagenModelo } from '../modelos/imagen.modelo';
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


  


  subirArchivo(modelo: File): Observable<File> {
    return this.http.post<File>(`${this.urlb}/CargarImagenProyecto`,modelo)
      
  }

  uploadFile(formData:FormData):Observable<imagenModelo> {
    return this.http.post<imagenModelo>(`${this.urlb}/CargarImagenProyecto`, formData);
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
        ciudadId: modelo.ciudadId
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
        ciudadId: modelo.ciudadId
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
