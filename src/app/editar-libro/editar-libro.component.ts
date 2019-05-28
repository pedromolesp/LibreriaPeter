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
      }
    );

  }

  editar() {
    this.catalogoApiService.actualizarLibro(this.libro).subscribe(
      () => {
        if(this.libro.tapaDura.valueOf()){
          this.libro.tapaDura = true;
        }else{
          this.libro.tapaDura = false;
        }
        if(this.libro.disponible === true){
          this.libro.disponible = true;
        }else{
          this.libro.disponible = false;
        }
        console.log('Se ha editado');
        this.router.navigateByUrl('/detalle/' + this.libro.id);
      },
      () => {
        console.log('Error al editar');
      }
    );
  }

}
