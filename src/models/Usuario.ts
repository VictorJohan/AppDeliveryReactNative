export class Usuario {
    usuarioId: number = 0;
    nombres:   string = '';
    apellidos: string = '';
    image: string = '';
    correo:    string = '';
    password:  string = '';
    telefono:  string = '';

    constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
