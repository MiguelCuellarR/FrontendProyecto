import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { InformacionFinancieraModelo } from '../modelos/informacionFinanciera.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InformacionFinancieraService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<InformacionFinancieraModelo[]> {
    return this.http.get<InformacionFinancieraModelo[]>(`${this.urlb}/infos-financieras`);
  }

  BuscarRegistro(id: String): Observable<InformacionFinancieraModelo> {
    return this.http.get<InformacionFinancieraModelo>(`${this.urlb}/infos-financieras/${id}`);
  }

  AlmacenarRegistro(modelo: InformacionFinancieraModelo): Observable<InformacionFinancieraModelo> {
    return this.http.post<InformacionFinancieraModelo>(`${this.urlb}/infos-financieras`,
      {
        id: modelo.id,
        total_ingresos: modelo.total_ingresos,
        datos_trabajo: modelo.datos_trabajo,
        tiempo_trabajo_actual: modelo.tiempo_trabajo_actual,
        nombre_ref_familiar: modelo.nombre_ref_familiar,
        telefono_ref_familiar: modelo.telefono_ref_familiar,
        nombre_ref_personal: modelo.nombre_ref_personal,
        telefono_ref_personal: modelo.telefono_ref_personal,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: InformacionFinancieraModelo): Observable<InformacionFinancieraModelo> {
    return this.http.put<InformacionFinancieraModelo>(`${this.urlb}/infos-financieras/${modelo.id}`,
      {
        id: modelo.id,
        total_ingresos: modelo.total_ingresos,
        datos_trabajo: modelo.datos_trabajo,
        tiempo_trabajo_actual: modelo.tiempo_trabajo_actual,
        nombre_ref_familiar: modelo.nombre_ref_familiar,
        telefono_ref_familiar: modelo.telefono_ref_familiar,
        nombre_ref_personal: modelo.nombre_ref_personal,
        telefono_ref_personal: modelo.telefono_ref_personal,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: InformacionFinancieraModelo): Observable<InformacionFinancieraModelo> {
    return this.http.delete<InformacionFinancieraModelo>(`${this.urlb}/infos-financieras/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
}
