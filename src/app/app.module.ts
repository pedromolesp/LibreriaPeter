import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AltaLibroComponent } from './alta-libro/alta-libro.component';
import { PortadaComponent } from './portada/portada.component';
import { ErrorComponent } from './error/error.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    AltaLibroComponent,
    PortadaComponent,
    ErrorComponent,
    EditarLibroComponent,
    DetalleComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    HttpModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
