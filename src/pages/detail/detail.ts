import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;
  newNoteFlag = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private noteService: NoteService,
                    private alertCtrl: AlertController) {
    this.note = this.navParams.get ("noteParam");
    if (!this.note){
      this.note = {
        title: "",
        content: "",
        date: ""
      }
      this.newNoteFlag = true;
    }
    console.log ("Na DetailPage", this.note);
  }

  onTrash (){
    let alerta = this.alertCtrl.create({
      title: "Delete?",
      message: `Are you sure you want to delete this note:"${this.note.title}"?`,
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Confirm",
          handler: () => {
            this.noteService.removeNote(this.note);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alerta.present();
  }

  ionViewDidLoad() {
         
  }

  ionViewWillLeave(){
    if (this.newNoteFlag) {
      if (this.note.title != "" && this.note.content != "" && this.note.date != "") {
        this.noteService.addNote(this.note);
      }
    }
  }
}
