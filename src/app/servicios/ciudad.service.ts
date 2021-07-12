import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { CiudadModelo } from '../modelos/ciudad.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
              private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }  

  ListarRegistros(): Observable<CiudadModelo[]>{
    return this.http.get<CiudadModelo[]>(`${this.urlb}/ciudades`);
  }

  BuscarRegistros(id: String): Observable<CiudadModelo[]>{
    return this.http.get<CiudadModelo[]>(`${this.urlb}/ciudades/${id}`);
  }

  AlmacenarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {

    return this.http.post<CiudadModelo>(`${this.urlb}/ciudades`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        paisId: modelo.paisId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {

    return this.http.put<CiudadModelo>(`${this.urlb}/ciudades/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre,
        paisId: modelo.paisId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {
    return this.http.delete<CiudadModelo>(`${this.urlb}/ciudades/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
        
      });
  }
}
