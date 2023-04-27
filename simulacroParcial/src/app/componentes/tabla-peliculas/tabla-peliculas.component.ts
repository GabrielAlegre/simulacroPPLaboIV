import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent {
  @Input() listaRecibida?:Pelicula[];
  @Output() obtenerDatosPelicula:EventEmitter<Pelicula>=new EventEmitter<Pelicula>();


  constructor(){}
  getDatosPelicula(pelicula:Pelicula){{
    this.obtenerDatosPelicula.emit(pelicula);
    console.info(pelicula);
  }}
}
