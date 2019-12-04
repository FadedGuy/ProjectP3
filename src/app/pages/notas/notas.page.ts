import { Component} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage{
  lista: any[] = [];

  tituloN: string = "";
  contentN: string = "";

  constructor(private storageNote: Storage, private router: Router) {
    this.storageNote.get('listNotes').then(listA => {
      if(listA != null)
        this.lista = listA;
      else
        this.lista = [];
    })
  }

  addNote(){
    this.lista.push({
      id: this.lista.length+1,
      title: this.tituloN,
      content: this.contentN,
    });

    this.tituloN = "";
    this.contentN = "";

    this.storageNote.set('listNotes', this.lista);
  }

  eraseNote(ide){
    let returne = [];

    for(let item of this.lista){
      if(item.id != ide)
        returne.push(item);
    }

    this.lista = returne;
    this.storageNote.set('listNotes', this.lista);
    alert("Nota eliminada");
  }

  return(){
    this.router.navigateByUrl('/home');
  }
}
