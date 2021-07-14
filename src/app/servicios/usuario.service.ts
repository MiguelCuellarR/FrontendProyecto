import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mode } from 'crypto-js';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { CiudadModelo } from '../modelos/ciudad.modelo';
import { RolModelo } from '../modelos/rol.modelo';
import { UsuarioModelo } from '../modelos/Usuario.modelo';

import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlb: String = DatosGenerales.urlBackend;
  token?: String = "";

  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTk();
  }

  ListarRegistros(): Observable<UsuarioModelo[]> {
    return this.http.get<UsuarioModelo[]>(`${this.urlb}/usuarios`,
    /*{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    }*/);
  }



  BuscarRegistro(id: String): Observable<UsuarioModelo[]> {
    return this.http.get<UsuarioModelo[]>(`${this.urlb}/usuarios/${id}`  /*,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      }*/);
  }


  ListarRoles(): Observable<RolModelo[]> {
    return this.http.get<RolModelo[]>(`${this.urlb}/roles-usuarios`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }


  

  AlmacenarRegistro(modelo: UsuarioModelo): Observable<UsuarioModelo> {
    return this.http.post<UsuarioModelo>(`${this.urlb}/usuarios`,
      {
        
        nombres: modelo.nombres,
        apellidos: modelo.apellidos,
        documento: modelo.documento,
        correo_electronico: modelo.correo_electronico,
        telefono_celular: modelo.telefono_celular,
        rolUsuarioId: modelo.rolUsuarioId,
        ciudadId: modelo.ciudadId
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  ModificarRegistro(modelo: UsuarioModelo): Observable<UsuarioModelo> {
    return this.http.put<UsuarioModelo>(`${this.urlb}/usuarios/${modelo.id}`,
      {
        id: modelo.id,
        codigo: modelo.nombres,
        nombre: modelo.apellidos,
        documento: modelo.documento,
        correo_electronico: modelo.correo_electronico,
        telefono_celular: modelo.telefono_celular,
        rol: modelo.rolUsuarioId,
        ciudad: modelo.ciudadId
        
      },
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(modelo: UsuarioModelo): Observable<UsuarioModelo> {
    return this.http.delete<UsuarioModelo>(`${this.urlb}/usuarios/${modelo.id}`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })

      });
  }
}
