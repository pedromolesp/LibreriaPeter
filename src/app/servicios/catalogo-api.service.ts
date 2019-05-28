import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../modelos/libro';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';







@Injectable({
  providedIn: 'root'
})
export class CatalogoApiService {
url = 'http://localhost:3000/libros';


  constructor( private router: Router, private http: HttpClient) { }

  //getCatalogo(): Observable<Libro[]> {
  getCatalogo(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }
altaLibro(libro: Libro) {
    let objeto = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      precio: libro.precio,
      numPaginas: libro.numPaginas,
      isbn: libro.isbn,
      tapaDura: libro.tapaDura,
      disponible: libro.disponible
    };
   
    return this.http.post<Libro>('http://localhost:3000/libros/', libro);
  }
  deleteBook(id: any): Observable<any> {
    if(confirm("¿Seguro que quieres eliminar este campo?")){
      this.router.navigateByUrl('/lista-libros');
      return this.http.delete('http://localhost:3000/libros/' + id);
    }
  }

  actualizarLibro(libro: Libro){
    return this.http.put<Libro>('http://localhost:3000/libros/' + libro.id, libro);
  }

  getLibro(idLibro: string){
    return this.http.get<Libro>('http://localhost:3000/libros/' + idLibro);
  }
}
