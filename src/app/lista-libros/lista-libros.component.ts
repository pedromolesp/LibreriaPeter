import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';
import { CatalogoApiService } from '../servicios/catalogo-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  animations:[

trigger('rotatedState2', [
  state('default', style({})),
  state('rotated', style({})),
  transition('default <=> rotated', animate('4.7s ease-in', keyframes([
    style({opacity: 1}),
    style({opacity: 0.5}),
    style({opacity: 0}),
    style({opacity: 0.5}),
    style({opacity: 1})

  ])))
]),
  ],
})
export class ListaLibrosComponent implements OnInit {


  state2: string = 'default';

  eliminar = 'https://upload.wikimedia.org/wikipedia/commons/f/f6/White_X_in_red_background.png';
  editar = 'https://cdn.icon-icons.com/icons2/841/PNG/128/flat-style-circle-edit_icon-icons.com_66939.png';
  libros: Observable<Libro[]>;

  constructor(private catalogoApiService: CatalogoApiService, private route : Router) {
    //this.libro = catalogoApiService.getCatalogo();
    

    /*.subscribe(result => {
      console.log(result);
      this.libros = result as Libro[];
    }*/

  }
  ngOnInit() {
    this.libros = this.catalogoApiService.getCatalogo();
  }
  eliminarLibro(id: any) {
    this.catalogoApiService.deleteBook(id).subscribe(
      () => {
            this.libros = this.catalogoApiService.getCatalogo();
            this.route.navigateByUrl('/lista-libros');
      },

    );

  }


}
