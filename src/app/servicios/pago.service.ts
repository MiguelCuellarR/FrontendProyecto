import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { PagoModelo } from '../modelos/pago.modelo';
import { PaisModelo } from '../modelos/pais.modelo';
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


  

  uploadFile(formData:FormData):Observable<PagoModelo> {
    return this.http.post<PagoModelo>(`${this.urlb}/CargarComprobantePago`, formData);
  }

  descargarArchivo(nombre?: String): Observable<PagoModelo> {
    console.log(`${this.urlb}/archivo/3/${nombre}`);
    
    return this.http.get<PagoModelo>(`${this.urlb}/archivo/3/${nombre}`);
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
        comprobante: modelo.comprobante,
        valor: modelo.valor,
        solicitudEstudioId: modelo.solicitudEstudioId
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
        comprobante: modelo.comprobante,
        valor: modelo.valor,
        solicitudEstudioId: modelo.solicitudEstudioId
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
