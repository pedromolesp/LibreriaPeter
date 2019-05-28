import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AltaLibroComponent } from './alta-libro/alta-libro.component';
import { PortadaComponent } from './portada/portada.component';
import { ErrorComponent } from './error/error.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'lista-libros', component: ListaLibrosComponent },
  { path: 'alta-libro', component: AltaLibroComponent },
  { path: 'editar-libro/:id', component: EditarLibroComponent },
  { path: 'portada', component: PortadaComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '', redirectTo: 'portada', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
