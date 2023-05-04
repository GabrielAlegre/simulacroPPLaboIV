import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDoc, getDocs, updateDoc } from "@angular/fire/firestore";
import { Actor } from '../clases/actor';
import { SweetalertService } from 'src/app/servicios/sweetalert.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseActoresService {

  constructor(private firestore:Firestore, private serviceAlert:SweetalertService) { }

  guardar(actor:Actor)
  {
    const col = collection(this.firestore, 'actores');
    this.serviceAlert.showSuccessAlert(`Se dio de alta correctamente al Actor`, "excelente!", 'error')
    return addDoc(col, {nombre: actor.nombre, apellido: actor.apellido, edad:actor.edad, foto:actor.foto, pais:actor.pais});
  }

}

