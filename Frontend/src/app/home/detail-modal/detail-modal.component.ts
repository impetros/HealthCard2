import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiService } from '../../shared/api.service';
import { Pacient } from 'src/app/shared/pacient.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  @ViewChild('detailModal') modal: ModalDirective;
  pacient = new Pacient();
  studio: string;
 

  constructor(private api: ApiService) { }

  ngOnInit() {}

  initialize(id: number): void {
    this.getPacient(id);
    this.modal.show();
  }

  // getStudio(id: number) {
  //   this.api.getStudio(id)
  //     .subscribe((data: any) => {
  //       this.studio = data.name;
  //     },
  //       (err: Error) => {
  //         console.log('err', err);

  //       });
  // }

  getPacient(id: number) {
    this.api.getPacient(id)
      .subscribe((data: Pacient) => {
        this.pacient = data;
        this.pacient.pacientId = id;
        //this.getStudio(this.pacient.);
      },
        (err: Error) => {
          console.log('err', err);

        });
  }
}
