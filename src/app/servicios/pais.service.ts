import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { PaisModelo } from '../modelos/pais.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<PaisModelo[]> {
    return this.http.get<PaisModelo[]>(`${this.urlb}/paises`);
  }

  BuscarRegistro(id: String): Observable<PaisModelo> {
    return this.http.get<PaisModelo>(`${this.urlb}/paises/${id}`);
  }

  AlmacenarRegistro(modelo: PaisModelo): Observable<PaisModelo> {

    return this.http.post<PaisModelo>(`${this.urlb}/paises`,
      {
        id:modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: PaisModelo): Observable<PaisModelo> {
    return this.http.put<PaisModelo>(`${this.urlb}/paises/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: PaisModelo): Observable<PaisModelo> {
    return this.http.delete<PaisModelo>(`${this.urlb}/paises/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
  
}