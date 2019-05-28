import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';

export class Libro {
    id?: any;
    titulo: string;
    autor: string;
    editorial: string;
    precio: number;
    numPaginas: number;
    isbn: string;
    tapaDura: boolean;
    disponible: boolean;

    constructor(titulo: string, autor: string, editorial: string,
        precio: number, numPaginas: number, isbn: string, tapaDura: boolean, disponible: boolean) {

            this.titulo = titulo;
            this.autor = autor;
            this.editorial = editorial;
            this.precio = precio;
            this.numPaginas = numPaginas;
            this.isbn = isbn;
            this.tapaDura = tapaDura;
            this.disponible = disponible;
    }

    toString() {
        return this.titulo + '-' + this.autor;
    }


}