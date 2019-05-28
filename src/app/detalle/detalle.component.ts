import { Component, OnInit } from '@angular/core';
import { CatalogoApiService } from '../servicios/catalogo-api.service';
import { Libro } from '../modelos/libro';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers} from '@angular/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number;
  libro: Libro;

  eliminar = 'https://upload.wikimedia.org/wikipedia/commons/f/f6/White_X_in_red_background.png';
  editarimg = 'https://cdn.icon-icons.com/icons2/841/PNG/128/flat-style-circle-edit_icon-icons.com_66939.png';
  privateLesson = false;

  private headers = new Headers({'Content-Type': 'application/json'});




  constructor(private catalogoApiService: CatalogoApiService, private router: Router, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  
    this.catalogoApiService.getLibro(id).subscribe(
      (p) => {
        this.libro = p;
        this.privateLesson = true;
      }
    );


  }
  eliminarLibro() {
    this.catalogoApiService.deleteBook(this.id).subscribe(
      () => {
           this.router.navigateByUrl('/lista-libros');
      },

    );

  }

  editar() {
    this.router.navigateByUrl('/editar-libro/' + this.libro.id);
  }

}
