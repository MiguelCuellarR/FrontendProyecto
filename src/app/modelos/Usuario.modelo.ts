import { UsuarioModule } from "../modulos/usuario/usuario.module";

export class UsuarioModelo {

    id?: String;
    nombres?: String;
    apellidos?: String;
    documento?: String;
    correo_electronico?: String;
    telefono_celular?: String;
    contrasena?: String;
    rolUsuarioId?: String;
    ciudadId?:String;
    user?: UsuarioModule;
    token?: String;
    isLoggedIn: Boolean = false;

}