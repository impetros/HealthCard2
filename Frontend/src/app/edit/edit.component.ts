import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Tratament } from '../shared/tratament.model';
import { Pacient } from '../shared/pacient.model';
import { Doctor } from '../shared/doctor.model';
import { EditPacientModalComponent } from './edit-pacient-modal/edit-pacient-modal.component';
import { EditDoctorModalComponent } from './edit-doctor-modal/edit-doctor-modal.component';
import { EditTratamentModalComponent } from './edit-tratament-modal/edit-tratament-modal.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  tratamente: Tratament[] = [];
  pacienti: Pacient[] = [];
  doctori: Doctor[] = [];



  @ViewChild('editTratamentModal') editTratamentModal: EditTratamentModalComponent;
  @ViewChild('editPacientModal') editPacientModal: EditPacientModalComponent;
  @ViewChild('editDoctorModal') editDoctorModal: EditDoctorModalComponent;


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTratamente();
    this.getPacienti();
    this.getDoctori();
  }

  getTratamente() {
    this.api.getTratamente()
      .subscribe((data: Tratament[]) => {
        this.tratamente = [];

        for (let i = 0; i < data.length; i++) {
          this.api.getTratament(data[i].tratamentId)
            .subscribe((info: Tratament) => {
              this.tratamente.push(info);
            },
              (e: Error) => {
                console.log('err', e);
              });
        }

      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  getPacienti() {

    this.api.getPacienti()
      .subscribe((data: Pacient[]) => {
        this.pacienti = data;
      },
        (error: Error) => {
          console.log('err', error);
        });
  }

  getDoctori() {
    this.api.getDoctori()
      .subscribe((data: Doctor[]) => {
        this.doctori = data;
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  deleteTratament(id: number) {
    this.api.deleteTratament(id)
      .subscribe(() => {
        this.getTratamente();
      },
        (error: Error) => {
          console.log(error);
        });
  }

  deletePacient(id: number) {
    this.api.deletePacient(id)
      .subscribe(() => {
        this.getPacienti();
      },
        (error: Error) => {
          console.log(error);
        });
  }

  deleteDoctor(id: number) {
    this.api.deleteDoctor(id)
      .subscribe(() => {
        this.getDoctori();
      },
        (error: Error) => {
          console.log(error);
        });

  }

  showM1(id: number) {
    this.editTratamentModal.initialize(id);
  }

  showM2(id: number) {
    this.editPacientModal.initialize(id);
  }

  showM3(id: number) {
    this.editDoctorModal.initialize(id);
  }

  onEditFinished(event: string) {
    if (event === 'tratament') {
      this.getTratamente();
    }
    if (event === 'pacient') {
      this.getPacienti();
    }
    if (event === 'doctor') {
      this.getDoctori();
    }
  }
}
