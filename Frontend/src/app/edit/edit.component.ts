import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { EditTratamentModalComponent } from './edit-tratament-modal/edit-tratament-modal.component';
import { Tratament } from '../shared/tratament.model';
import { Pacient } from '../shared/pacient.model';
import { Doctor } from '../shared/doctor.model';

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
  // @ViewChild('editArtistModal') editArtistModal: EditArtistModalComponent;
  // @ViewChild('editSongModal') editSongModal: EditSongModalComponent;


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getTratamente();
    // this.getArtists();
    // this.getSongs();
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

  // getArtists() {

  //   this.api.getArtists()
  //     .subscribe((data: Artist[]) => {
  //       this.artists = data;
  //     },
  //       (error: Error) => {
  //         console.log('err', error);
  //       });
  // }

  // getSongs() {
  //   this.api.getSongs()
  //     .subscribe((data: Song[]) => {
  //       this.songs = data;
  //     },
  //       (error: Error) => {
  //         console.log('err', error);

  //       });
  // }

  deleteTratament(id: number) {
    this.api.deleteTratament(id)
      .subscribe(() => {
        this.getTratamente();
      },
        (error: Error) => {
          console.log(error);
        });
  }

  // deleteArtist(id: number) {
  //   this.api.deleteArtist(id)
  //     .subscribe(() => {
  //       this.getArtists();
  //     },
  //       (error: Error) => {
  //         console.log(error);
  //       });
  // }

  // deleteSong(id: number) {
  //   this.api.deleteSong(id)
  //     .subscribe(() => {
  //       this.getSongs();
  //     },
  //       (error: Error) => {
  //         console.log(error);
  //       });

  // }

  showM1(id: number) {
    this.editTratamentModal.initialize(id);
  }

  // showM2(id: number) {
  //   this.editArtistModal.initialize(id);
  // }

  // showM3(id: number) {
  //   this.editSongModal.initialize(id);
  // }

  onEditFinished(event: string) {
    if (event === 'tratament') {
      this.getTratamente();
    }
    // if (event === 'artist') {
    //   this.getArtists();
    // }
    // if (event === 'song') {
    //   this.getSongs();
    // }


  }

}
