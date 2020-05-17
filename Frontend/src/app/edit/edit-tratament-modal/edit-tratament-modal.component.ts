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
        this.initializeFrom(this.currentTratament);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  initializeFrom(currentTratament: Tratament) {
    this.editTratamentForm = this.fb.group({
      diagnosticId: [currentTratament.diagnosticId, Validators.required],
      medicamentId: [currentTratament.medicamentId, Validators.required],
      dozaj: [currentTratament.dozaj, Validators.required],
      dataAdministrare: [currentTratament.dataAdministrare, Validators.required],
      dataTerminare: [currentTratament.dataTerminare, Validators.required]
    });
  }

  editTratament() {
    const editedTratament = new Tratament({
        tratamentId: this.currentTratament.tratamentId, 
        diagnosticId: this.editTratamentForm.value.diagnosticId ,
        medicamentId: this.editTratamentForm.value.medicamentId,
        dozaj: this.editTratamentForm.value.dozaj,
        dataAdministrare: this.editTratamentForm.value.dataAdministrare,
        dataTerminare: this.editTratamentForm.value.dataTerminare
    });

    this.api.editTratament(editedTratament)
      .subscribe(() => {
        this.change.emit('tratament');
        this.modal.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });
  }

}
