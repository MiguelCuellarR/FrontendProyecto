
export class UsuarioModelo {

    id?: String;
    nombres?: String;
    apellidos?: String;
    documento?: number;
    correo_electronico?: String;
    telefono_celular?: String;
    contrasena?: String;
    user?: UsuarioModelo;
    token?: String;
    isLoggedIn: boolean =false ;

}