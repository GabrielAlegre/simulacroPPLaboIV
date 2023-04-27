import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { format } from 'date-fns';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  estado="tabla";
  listaPeliculas:Pelicula[]=[];
  peliSelec:Pelicula={};
  seSeleccionoUnaPelicula=false;
  constructor(){
    this.listaPeliculas=[
    {id:1, nombre:"Argentina, 1985", tipo:"otros", fechaEstreno: '2022-05-23', cantidadDePublico:3000, fotoDeLaPeli: "../../../assets/maxresdefault.jpg"},
    {id:2, nombre:"Nueve reinas", tipo:"comedia", fechaEstreno: '2001-09-30', cantidadDePublico:1000, fotoDeLaPeli: "../../../assets/maxresdefault.jpg"},
    {id:3, nombre:"Amor de pelicula", tipo:"amor", fechaEstreno: '2023-02-1', cantidadDePublico:1200, fotoDeLaPeli: "../../../assets/maxresdefault.jpg"}]
  }

  cambiarEstado(){
    this.estado= this.estado=='tabla'?'listado':'tabla';
  }

  tomoProductoSeleccionado($event: Pelicula){
this.seSeleccionoUnaPelicula=true;
    this.peliSelec=$event;
  }
}
