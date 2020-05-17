import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Doctor } from 'src/app/shared/doctor.model';


@Component({
  selector: 'app-edit-doctor-modal',
  templateUrl: './edit-doctor-modal.component.html',
  styleUrls: ['./edit-doctor-modal.component.css']
})
export class EditDoctorModalComponent {
  @ViewChild('editDoctorModal') modal: ModalDirective;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  editDoctorForm: FormGroup;
  currentDoctor = new Doctor();

  constructor(public fb: FormBuilder, private api: ApiService) { }

  initialize(id: number): void {
    this.modal.show();
    this.api.getDoctor(id)
      .subscribe((data: Doctor) => {
        this.currentDoctor = data;
        this.initializeFrom(this.currentDoctor);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  initializeFrom(currentDoctor: Doctor) {
    this.editDoctorForm = this.fb.group({
        doctorNume: [currentDoctor.doctorNume, Validators.required],
        doctorPrenume: [currentDoctor.doctorPrenume, Validators.required],
        varsta: [currentDoctor.varsta, Validators.required],
        specialitate: [currentDoctor.specialitate, Validators.required],
    });
  }

  editDoctor() {
    const editedDoctor = new Doctor({
        doctorId: this.currentDoctor.doctorId,
        doctorNume: this.editDoctorForm.value.doctorNume,
        doctorPrenume: this.editDoctorForm.value.doctorPrenume,
        varsta: this.editDoctorForm.value.varsta,
        specialitate: this.editDoctorForm.value.specialitate,
    });

    this.api.editDoctor(editedDoctor)
      .subscribe(() => {
        this.change.emit('doctor');
        this.modal.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });
  }

}



