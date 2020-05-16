import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  options = ['Pacient', 'Diagnostic', 'Tratament'];
  selectedOption = 'Pacient';
  currentFormRef: any;
  addPacientForm: FormGroup;
  addDiagnosticForm: FormGroup;
  addTratamentForm: FormGroup;
  success: boolean;

  constructor(public fb: FormBuilder, private api: ApiService) { }


  ngOnInit() {

    this.addPacientForm = this.fb.group({
      pacientNume: [null, Validators.required],
      pacientPrenume: [null, Validators.required],
      varsta: [null, Validators.required],
      cnp: [null, Validators.required]
    });
    this.addDiagnosticForm = this.fb.group({
      pacientId: [null, Validators.required],
      doctorId: [null, Validators.required],
    });
    this.addTratamentForm = this.fb.group({
      diagnosticId: [null, Validators.required],
      medicamentId: [null, Validators.required],
      dozaj: [null, Validators.required],
      dataAdministrare: [null, Validators.required],
      dataTerminare: [null, Validators.required],
    });

    this.currentFormRef = this.addPacientForm;

  }

  radioChange(event: any) {
    this.selectedOption = event.target.value;
    this.currentFormRef = this['add' + this.selectedOption + 'Form'];
    /*
      notatiile this.api si this[api] sunt echivalente

     folosind paratenze putem utiliza variabile

     this['add' + this.selectedOption + 'Form'] = this['addAlbumForm']  = this.addAlbumForm sau
                                                                        = this.addSongForm sau
                                                                        = this.addArtist
    */
  }

  add() {
    /*


    this.api['add' + this.selectedOption] = this.api['addAlbum'] = this.api.addAlbum sau
                                          = this.api['addSong] sau
                                          = this.api['addArtist]
    */
    this.api['add' + this.selectedOption](this.currentFormRef.value).subscribe(() => {

      this.currentFormRef.reset();
      this.success = true;
      setTimeout(() => {
        this.success = null;
      }, 3000);
    },
      (error: Error) => {
        console.log(error);
        this.currentFormRef.reset();
        this.success = false;
        setTimeout(() => {
          this.success = null;
        }, 3000);
      });

  }
}
