import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { InmuebleModelo } from '../modelos/inmueble.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
              private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<InmuebleModelo[]>{
    return this.http.get<InmuebleModelo[]>(`${this.urlb}/inmuebles`);
  }

  BuscarRegistro(id: String): Observable<InmuebleModelo>{
    return this.http.get<InmuebleModelo>(`${this.urlb}/inmuebles/${id}`);
  }

  AlmacenarRegistro(modelo: InmuebleModelo): Observable<InmuebleModelo> {
    return this.http.post<InmuebleModelo>(`${this.urlb}/inmuebles`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        identificador: modelo.identificador,
        valor: modelo.valor,
        bloqueId: modelo.bloqueId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: InmuebleModelo): Observable<InmuebleModelo> {
    return this.http.put<InmuebleModelo>(`${this.urlb}/inmuebles/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.codigo,
        identificador: modelo.identificador,
        valor: modelo.valor,
        bloqueId: modelo.bloqueId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: InmuebleModelo): Observable<InmuebleModelo> {
    return this.http.delete<InmuebleModelo>(`${this.urlb}/inmuebles/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
        
      });
  }
}
