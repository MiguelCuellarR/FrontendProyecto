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

  ListarRegistros(): Observable<PaisModelo[]>{
    return this.http.get<PaisModelo[]>(`${this.urlb}/paises`);
  }

  BuscarRegistros(id: String): Observable<PaisModelo[]>{
    return this.http.get<PaisModelo[]>(`${this.urlb}/paises/${id}`);
  }

  AlmacenarRegistro(departamento: PaisModelo): Observable<PaisModelo> {
    return this.http.post<PaisModelo>(`${this.urlb}/paises`,
      {
        id: departamento.id,
        codigo: departamento.codigo,
        nombre: departamento.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(departamento: PaisModelo): Observable<PaisModelo> {
    return this.http.put<PaisModelo>(`${this.urlb}/paises/${departamento.id}`,
      {
        id: departamento.id,
        codigo: departamento.codigo,
        nombre: departamento.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(departamento: PaisModelo): Observable<PaisModelo> {
    return this.http.delete<PaisModelo>(`${this.urlb}/paises/${departamento.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
        
      });
  }
}
