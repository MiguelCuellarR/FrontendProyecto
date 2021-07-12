import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { BloqueModelo } from '../modelos/bloque.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class BloqueService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
              private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<BloqueModelo[]>{
    return this.http.get<BloqueModelo[]>(`${this.urlb}/bloques`);
  }

  BuscarRegistro(id: String): Observable<BloqueModelo[]>{
    return this.http.get<BloqueModelo[]>(`${this.urlb}/bloques/${id}`);
  }

  AlmacenarRegistro(modelo: BloqueModelo): Observable<BloqueModelo> {
    return this.http.post<BloqueModelo>(`${this.urlb}/bloques`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        proyectoId: modelo.proyectoId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: BloqueModelo): Observable<BloqueModelo> {
    return this.http.put<BloqueModelo>(`${this.urlb}/bloques/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        proyectoId: modelo.proyectoId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: BloqueModelo): Observable<BloqueModelo> {
    return this.http.delete<BloqueModelo>(`${this.urlb}/bloques/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
        
      });
  }
}
