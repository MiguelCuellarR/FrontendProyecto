import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { SolicitudEstudioModelo } from '../modelos/solicitudEstudio.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudEstudioService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<SolicitudEstudioModelo[]> {
    return this.http.get<SolicitudEstudioModelo[]>(`${this.urlb}/solicitudes-estudios`);
  }

  BuscarRegistro(id: String): Observable<SolicitudEstudioModelo> {
    return this.http.get<SolicitudEstudioModelo>(`${this.urlb}/solicitudes-estudios/${id}`);
  }

  AlmacenarRegistro(modelo: SolicitudEstudioModelo): Observable<SolicitudEstudioModelo> {
    return this.http.post<SolicitudEstudioModelo>(`${this.urlb}/solicitudes-estudios`,
      {
        id: modelo.id,
        fecha: modelo.fecha,
        oferta: modelo.oferta_economica,
        inmueble: modelo.inmuebleId,
        cliente: modelo.clienteId,
        estado: modelo.estadoId,
        usuario: modelo.usuarioId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: SolicitudEstudioModelo): Observable<SolicitudEstudioModelo> {
    return this.http.put<SolicitudEstudioModelo>(`${this.urlb}/solicitudes-estudios/${modelo.id}`,
      {
        id: modelo.id,
        fecha: modelo.fecha,
        oferta: modelo.oferta_economica,
        inmueble: modelo.inmuebleId,
        cliente: modelo.clienteId,
        estado: modelo.estadoId,
        usuario: modelo.usuarioId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: SolicitudEstudioModelo): Observable<SolicitudEstudioModelo> {
    return this.http.delete<SolicitudEstudioModelo>(`${this.urlb}/solicitudes-estudios/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
}
