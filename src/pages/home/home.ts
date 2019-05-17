import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes;

  constructor(public navCtrl: NavController,
                     private noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  itemClicado(note){
    //console.log('itemClicado', note);
    this.navCtrl.push ('DetailPage', {
      noteParam: note
    });
  }

}
