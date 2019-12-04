import { Component} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage{
  lista: any[] = [];

  nombreN: string = "";
  apellidoN: string = "";
  numeroN: string = "";
  fechaN: string = "";

  constructor(private storage: Storage, private router: Router) {
    this.storage.get('list').then(listaA => {
      if(listaA != null)
        this.lista = listaA;
      else
        this.lista = [];
    });
  }

  retrieveFecha(){
    let aux: string = "";
        let cosa = false;
        if(this.fechaN.length <= 10){
          return this.fechaN;
        }else{
        for(let i = 0; i < this.fechaN.length; i++){
          if((this.fechaN[i] == 'T' && cosa == false)){
            cosa = true;
            return aux;
          }
          aux += this.fechaN[i];
        }
        }
  }

  anadir(){
    let found = false;
    let it  = 0;
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].mod){
        found = true;
        it = i;
      }
    }

    if(found){
      this.lista[it].nom = this.nombreN;
      this.lista[it].apel = this.apellidoN;
      this.lista[it].tel = this.numeroN;
      this.lista[it].fec = this.retrieveFecha();
      this.lista[it].mod = false;
      found = false;
      it = 0;
      this.nombreN="";
      this.apellidoN="";
      this.numeroN="";
      this.fechaN="";
      this.storage.set('list', this.lista);
    }else{
      this.lista.push({
        id: this.lista.length + 1,
        nom: this.nombreN,
        apel: this.apellidoN,
        tel: this.numeroN,
        fec: this.retrieveFecha(),
        mod: false
      });
    }

      this.nombreN="";
      this.apellidoN="";
      this.numeroN="";
      this.fechaN="";
  
      this.storage.set('list', this.lista);
  }

  edit(ide){
    var max = this.lista.length;
    for(let i = 0; i < max; i++){
      if(this.lista[i].id == ide){
        this.nombreN = this.lista[i].nom;
        this.apellidoN = this.lista[i].apel;
        this.numeroN = this.lista[i].tel;
        this.fechaN = this.lista[i].fec;
        this.lista[i].mod = true;
      }
    }  
  }

  elim(ide){
    let response = [];

    for(let item of this.lista){
      if(item.id != ide){
        response.push(item);
      }
    }

    this.lista = response;
    this.storage.set('list', this.lista);
    alert("Contacto eliminado");
  }

  return(){
    this.router.navigateByUrl('/home');
  }
}
