import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { Pacient } from '../shared/pacient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pacienti: Pacient[] = [];
  searchText: string;
  title: string;

  @ViewChild('detailModal') detailModal: DetailModalComponent;


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPacienti().subscribe((data: Pacient[]) => {

      for (let i = 0; i < data.length; i++) {
        this.api.getPacient(data[i].pacientId).subscribe((info: Pacient) => {
          if(info.cnp.charAt(0) === "1"){
            info.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3kf5-4Aw8Y42yUHNBz57v70VbRhQzrOG_G6BS5izKPJ0_QGjw&usqp=CAU";
          } else {
            info.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1Ez__u-OXRGL0J-8GpfAyvPer0fQTwJnrg6X57m8FKQzoREbV&usqp=CAU";
          }
          this.pacienti.push(info);
        },
          (e: Error) => {
            console.log('err', e);
          });
      }
    },
      (er: Error) => {
        console.log('err', er);
      });
  }

  showDM(id: number): void {
    this.detailModal.initialize(id);
  }

}
