import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { UsuarioModelo } from '../modelos/Usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlb: String = DatosGenerales.urlBackend;
  constructor(private http: HttpClient) { }

  identificarUsuario(usuario: UsuarioModelo): Observable<any> {

    return this.http.post<any>(`${this.urlb}/identificar-usuario`, {
      nombre_usuario: usuario.correo_electronico,
      clave: usuario.contrasena

    }, {
      headers: new HttpHeaders({})
    });

  }

}
