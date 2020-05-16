import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiService } from '../../shared/api.service';
import { Pacient } from 'src/app/shared/pacient.model';
import { Diagnostic } from 'src/app/shared/diagnostic.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  @ViewChild('detailModal') modal: ModalDirective;
  pacient = new Pacient();
  diagnostice: Diagnostic[] = [];
 

  constructor(private api: ApiService) { }

  ngOnInit() {}

  initialize(id: number): void {
    this.getPacient(id);
    this.modal.show();
  }

  getDiagnostice(id: number) {
    this.diagnostice = [];
    this.api.getDiagnosticePacient(id)
      .subscribe((data: Diagnostic[]) => {
        
      for (let i = 0; i < data.length; i++) {
        this.diagnostice.push(data[i]);
      }
      },
        (err: Error) => {
          console.log('err', err);

        });
  }

  getPacient(id: number) {
    this.api.getPacient(id)
      .subscribe((data: Pacient) => {
        this.pacient = data;
        this.pacient.pacientId = id;
        this.getDiagnostice(id);
      },
        (err: Error) => {
          console.log('err', err);

        });
  }
}
