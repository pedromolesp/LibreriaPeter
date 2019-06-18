import { Component, OnInit } from '@angular/core';
import { CatalogoApiService } from '../servicios/catalogo-api.service';
import { Libro } from '../modelos/libro';
import {Http,  Headers} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  disponible: string;
  id: number;
  libro: Libro;
  privateLesson = false;
  private headers = new Headers({'Content-Type': 'application/json'});




  constructor(private catalogoApiService: CatalogoApiService, private router: Router, private route: ActivatedRoute, private http: Http) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.catalogoApiService.getLibro(id).subscribe(
      (p) => {
        this.libro = p;
        this.privateLesson = true;
        this.disponible = this.libro.disponible ? "true" : "false";
      }
    );
    

  }

  editar() {
    this.libro.disponible = this.disponible === 'true' ? true : false;
    this.catalogoApiService.actualizarLibro(this.libro).subscribe(
      () => {
        console.log('Se ha editado');
        this.router.navigateByUrl('/detalle/' + this.libro.id);
      },
      () => {
        console.log('Error al editar');
      }
    );
  }

}
