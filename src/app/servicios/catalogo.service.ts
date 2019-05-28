import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
private libros: Array<Libro> = new Array<Libro>();


  constructor() {
  }

  alta(libro: Libro) {
    this.libros.push(libro);
  }

  getCatalogo() {
    return this.libros;
  }
}

