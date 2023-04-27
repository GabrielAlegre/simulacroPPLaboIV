import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  @Input() listaRecibida?:Pelicula[];
  @Output() obtenerDatosPelicula:EventEmitter<Pelicula>=new EventEmitter<Pelicula>();


  constructor(){}
  getDatosPelicula(pelicula:Pelicula){{
    this.obtenerDatosPelicula.emit(pelicula);
    console.info(pelicula);
  }}
}
