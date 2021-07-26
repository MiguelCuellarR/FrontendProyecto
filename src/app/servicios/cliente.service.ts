import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { ClienteModelo } from '../modelos/cliente.modelo';
import { imagenModelo } from '../modelos/imagen.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }




  subirArchivo(modelo: File): Observable<File> {
    return this.http.post<File>(`${this.urlb}/CargarImagenCliente`,modelo)
      
  }

  uploadFile(formData:FormData):Observable<imagenModelo> {
    return this.http.post<imagenModelo>(`${this.urlb}/CargarImagenCliente`, formData);
  }




  ListarRegistros(): Observable<ClienteModelo[]> {
    return this.http.get<ClienteModelo[]>(`${this.urlb}/clientes`);
  }

  BuscarRegistro(id: String): Observable<ClienteModelo> {
    return this.http.get<ClienteModelo>(`${this.urlb}/clientes/${id}`);
  }

  AlmacenarRegistro(modelo: ClienteModelo): Observable<ClienteModelo> {
    return this.http.post<ClienteModelo>(`${this.urlb}/clientes`,
      {
        id: modelo.id,
        documento: modelo.documento,
        nombres: modelo.nombres,
        apellidos: modelo.apellidos,
        fec_nacimiento: modelo.fec_nacimiento,
        fotografia: modelo.fotografia,
        num_celular: modelo.num_celular,
        correo_electronico: modelo.correo_electronico,
        direccion: modelo.direccion,
        ciudadId: modelo.ciudadId,
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: ClienteModelo): Observable<ClienteModelo> {
    return this.http.put<ClienteModelo>(`${this.urlb}/clientes/${modelo.id}`,
      {
        id: modelo.id,
        documento: modelo.documento,
        nombres: modelo.nombres,
        apellidos: modelo.apellidos,
        fec_nacimiento: modelo.fec_nacimiento,
        fotografia: modelo.fotografia,
        num_celular: modelo.num_celular,
        correo_electronico: modelo.correo_electronico,
        direccion: modelo.direccion,
        ciudadId: modelo.ciudadId,
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: ClienteModelo): Observable<ClienteModelo> {
    return this.http.delete<ClienteModelo>(`${this.urlb}/clientes/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
}
