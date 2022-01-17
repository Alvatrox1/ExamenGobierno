export class Usuario {

    public id_usuario : Number;
    public username : String;
    public password : String;
    public contraseña : String;
    public habilitado : Boolean;

    constructor(id: Number, user: String , pass: String, contra: String, habilitado: Boolean) {
        this.id_usuario = id;
        this.username = user;
        this.password = pass;
        this.contraseña = contra;
        this.habilitado = habilitado;
    }

}