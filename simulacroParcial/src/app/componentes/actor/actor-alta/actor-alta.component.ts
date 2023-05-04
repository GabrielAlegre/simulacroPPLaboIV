import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirebaseActoresService } from 'src/app/servicios/firebase-actores.service';
import { SweetalertService } from 'src/app/servicios/sweetalert.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  // countries:any[]=[];
  paisSeleccion:any;
  unActor:Actor= new Actor("", "", "", "", "");

  constructor(private firebase:FirebaseActoresService, private serviceAlert:SweetalertService ){}

  ngOnInit(){
    // this.api.getAllCountries().subscribe((data=>{
    //   this.countries = data;
    // }))
    
  }

  paisSeleccionado($event:any){
    this.paisSeleccion = $event;
    this.unActor.pais=this.paisSeleccion;
  }

  guardarActor(){
    this.firebase.guardar(this.unActor);
    this.serviceAlert.showSuccessAlert(`Se dio de alta correctamente al Actor`, "excelente!", 'success');
  }
}
