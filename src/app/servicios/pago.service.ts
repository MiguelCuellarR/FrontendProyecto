import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { PagoModelo } from '../modelos/pago.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<PagoModelo[]> {
    return this.http.get<PagoModelo[]>(`${this.urlb}/pagos`);
  }

  BuscarRegistro(id: String): Observable<PagoModelo> {
    return this.http.get<PagoModelo>(`${this.urlb}/pagos/${id}`);
  }

  AlmacenarRegistro(modelo: PagoModelo): Observable<PagoModelo> {
    return this.http.post<PagoModelo>(`${this.urlb}/pagos`,
      {
        id: modelo.id,
        comp: modelo.comprobante,
        val: modelo.valor,
        solicitud: modelo.solicitudEstudioId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: PagoModelo): Observable<PagoModelo> {
    return this.http.put<PagoModelo>(`${this.urlb}/pagos/${modelo.id}`,
      {
        id: modelo.id,
        comp: modelo.comprobante,
        val: modelo.valor,
        solicitud: modelo.solicitudEstudioId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: PagoModelo): Observable<PagoModelo> {
    return this.http.delete<PagoModelo>(`${this.urlb}/pagos/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
}
