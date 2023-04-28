export class Categoria {
    categoriaId: number = 0;
    nombre: string = '';
    descripcion: string = '';
    imagen: string = '';

    constructor(init?: Partial<Categoria>) {
        Object.assign(this, init);
    }
}