import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Tratament } from 'src/app/shared/tratament.model';

@Component({
  selector: 'app-edit-tratament-modal',
  templateUrl: './edit-tratament-modal.component.html',
  styleUrls: ['./edit-tratament-modal.component.css']
})
export class EditTratamentModalComponent {
  @ViewChild('editTratamentModal') modal: ModalDirective;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  editTratamentForm: FormGroup;
  currentTratament = new Tratament();


  constructor(public fb: FormBuilder, private api: ApiService) { }

  initialize(id: number): void {
    this.modal.show();
    this.api.getTratament(id)
      .subscribe((data: Tratament) => {
        this.currentTratament = data;
        // this.initializeFrom(this.currentTratament);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

//   initializeFrom(currentTratament: Tratament) {
//     this.editTratamentForm = this.fb.group({
//       diagnosticId: [currentTratament.diagnosticId, Validators.required],
//       medicamentId: [currentTratament.medicamentId, Validators.required],
//       dozaj: [currentTratament.dozaj, Validators.required],
//       artistId: ['', Validators.required],
//       songId: ['', Validators.required]
//     });
//   }

//   editTratament() {
//     const editedAlbum = new Tratament{
//       tratamentid: this.currentTratament.tratamentId, 
//       name: this.editTratamentForm. ,
//       releaseYear: this.editTratamentForm.value.releaseYear,
//       studioId: this.editTratamentForm.value.studioId,
//       songId: this.transformInNumberArray(this.editTratamentForm.value.songId),
//       artistId: this.transformInNumberArray(this.editTratamentForm.value.artistId),
//       img: this.editTratamentForm.value.img
//     });

//     this.api.editAlbum(editedAlbum)
//       .subscribe(() => {
//         this.change.emit('album');
//         this.modal.hide();
//       },
//         (error: Error) => {
//           console.log('err', error);
//         });
//   }

//   transformInNumberArray(string: string) {
//     return JSON.parse('[' + string + ']');
//   }

}
