import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelos/libro';
import { CatalogoApiService } from '../servicios/catalogo-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-libro',
  templateUrl: './alta-libro.component.html',
  styleUrls: ['./alta-libro.component.css']
})
export class AltaLibroComponent implements OnInit {

  libros: Observable<Libro[]>;
  titulo: string;
  autor: string;
  editorial: string;
  precio: number;
  numPaginas: number;
  isbn: string;
  tapaDura: boolean;
  disponible: boolean;

  libroDelFormulario: Libro;

  constructor(private catalogoApiService: CatalogoApiService, private route: Router) {
   this.libros = catalogoApiService.getCatalogo();
  }

  ngOnInit() {
  }
  alta() {
//convertir el objeto a json

    const libroNuevo: Libro = new Libro(this.titulo, this.autor,
      this.editorial, this.precio, this.numPaginas, this.isbn, this.tapaDura, this.disponible);
    this.catalogoApiService.altaLibro(libroNuevo).subscribe(() => { console.log('Se han insertado los datos')
      this.route.navigateByUrl('/lista-libros');
        }, (error) => {
    console.log('Algo ha explotado');
      }
    );


  }
  traerLibro(libroFormulario: Libro){
    this.libroDelFormulario = libroFormulario;
  }
  editarLibro() {
console.log(this.libroDelFormulario);
  }
}
