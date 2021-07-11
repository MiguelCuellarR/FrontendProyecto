import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosGenerales } from 'src/config/datos.generales';
import { UsuarioModelo } from '../modelos/Usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  datosDeSesion: BehaviorSubject<UsuarioModelo> = new BehaviorSubject<UsuarioModelo>(new UsuarioModelo());

  urlb: String = DatosGenerales.urlBackend;
  constructor(private http: HttpClient) {
    this.verificarSesion();

   }
   verificarSesion(){
     let datos = localStorage.getItem("session-data");
     if(datos){
       let datosEnObjeto: UsuarioModelo = JSON.parse(datos);
       datosEnObjeto.isLoggedIn = true;
       this.RefrescarDatosSesion(datosEnObjeto);  
     }
   }

  identificarUsuario(usuario: UsuarioModelo): Observable<any> {

    return this.http.post<any>(`${this.urlb}/identificar-usuario`, 
    {
      nombre_usuario: usuario.correo_electronico,
      clave: usuario.contrasena
    }, 
    {
      headers: new HttpHeaders({})
    });
  }

  RefrescarDatosSesion(usuarioModelo: UsuarioModelo){
    this.datosDeSesion.next(usuarioModelo);
  }

  ObtenerDatosSesion(){
    return this.datosDeSesion.asObservable();
  }

  AlmacenarDatosSesionEnLocal(usuarioModelo : UsuarioModelo){
    let datos = localStorage.getItem("session-data");
    if (datos){
      return false;
    }else {
      let datosString = JSON.stringify(usuarioModelo);
      localStorage.setItem("session-data", datosString);
      usuarioModelo.isLoggedIn=true;
      this.RefrescarDatosSesion(usuarioModelo);
      return true;
    }
  }

  RemoverLocalStorage(){
    let datos = localStorage.removeItem("session-data");
    this.RefrescarDatosSesion(new UsuarioModelo());
  }


}


