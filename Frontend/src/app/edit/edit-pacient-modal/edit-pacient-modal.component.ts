import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Pacient } from 'src/app/shared/pacient.model';

@Component({
  selector: 'app-edit-pacient-modal',
  templateUrl: './edit-pacient-modal.component.html',
  styleUrls: ['./edit-pacient-modal.component.css']
})
export class EditPacientModalComponent {
  @ViewChild('editPacientModal') modal: ModalDirective;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  editPacientForm: FormGroup;
  currentPacient = new Pacient();

  constructor(public fb: FormBuilder, private api: ApiService) {}

  initialize(id: number): void {

    this.modal.show();
    this.api.getPacient(id)
      .subscribe((data: Pacient) => {
        this.currentPacient = data;
        this.initializeFrom(this.currentPacient);
      },
        (error: Error) => {
          console.log('err', error);
        });
  }

  initializeFrom(currentPacient: Pacient) {
    this.editPacientForm = this.fb.group({
        pacientNume: [currentPacient.pacientNume, Validators.required],
        pacientPrenume: [currentPacient.pacientPrenume, Validators.required],
        varsta: [currentPacient.varsta, Validators.required],
        cnp: [currentPacient.cnp, Validators.required],
    });
  }

  editPacient() {
    const editedPacient = new Pacient({
      pacientId: this.currentPacient.pacientId,
      pacientNume: this.editPacientForm.value.pacientNume,
      pacientPrenume: this.editPacientForm.value.pacientPrenume,
      varsta: this.editPacientForm.value.varsta,
      cnp: this.editPacientForm.value.cnp
    });

    this.api.editPacient(editedPacient)
      .subscribe(() => {
        this.change.emit('pacient');
        this.modal.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });

  }

}
