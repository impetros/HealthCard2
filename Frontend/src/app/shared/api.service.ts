import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from './doctor.model';
import { Pacient } from './pacient.model';
import { Medicament } from './medicament.model';
import { Tratament } from './tratament.model';
import { Diagnostic } from './diagnostic.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  baseUrl = 'https://localhost:5001/api';
 
  
  //get methods

  getDoctor(id: number) {
    return this.http.get(this.baseUrl + '/doctor/' + id.toString(), { headers: this.header });
  }

  getPacient(id: number) {
    return this.http.get(this.baseUrl + '/pacient/' + id.toString(), { headers: this.header });
  }

  getMedicament(id: number) {
    return this.http.get(this.baseUrl + '/medicament/' + id.toString(), { headers: this.header });
  }

  getTratament(id: number) {
    return this.http.get(this.baseUrl + '/tratament/' + id.toString(), { headers: this.header });
  }

  getDiagnostic(id: number) {
    return this.http.get(this.baseUrl + '/diagnostic/' + id.toString(), { headers: this.header });
  }



  getDoctori() {
    return this.http.get(this.baseUrl + '/doctor', { headers: this.header });
  }

  getPacienti() {
    return this.http.get(this.baseUrl + '/pacient', { headers: this.header });
  }

  getMedicamente() {
    return this.http.get(this.baseUrl + '/medicament', { headers: this.header });
  }

  getTratamente() {
    return this.http.get(this.baseUrl + '/tratament', { headers: this.header });
  }

  getTratamenteDiagnostic(id: number) {
    return this.http.get(this.baseUrl + '/tratament/diagnostic/' + id.toString(), { headers: this.header });
  }


  getDiagnostice() {
    return this.http.get(this.baseUrl + '/diagnostic', { headers: this.header });
  }

  getDiagnosticePacient(id: number) {
    return this.http.get(this.baseUrl + '/diagnostic/pacient/' + id.toString(), { headers: this.header });
  }


  //post methods  

  addDoctor(doctor: Doctor) {
    return this.http.post(this.baseUrl + '/doctor', doctor, { headers: this.header });
  }

  addPacient(pacient: Pacient) {
    return this.http.post(this.baseUrl + '/pacient', pacient, { headers: this.header });
  }

  addMedicament(medicament: Medicament) {
    return this.http.post(this.baseUrl + '/medicament', medicament, { headers: this.header });
  }

  addTratament(tratament: Tratament) {
    return this.http.post(this.baseUrl + '/tratament', tratament, { headers: this.header });
  }

  addDiagnostic(diagnostic: Diagnostic) {
    return this.http.post(this.baseUrl + '/diagnostic', diagnostic, { headers: this.header });
  }

  //put methods

  editDoctor(doctor: Doctor) {
    return this.http.put(this.baseUrl + '/doctor/' + doctor.doctorId.toString(), doctor, { headers: this.header });
  }

  editPacient(pacient: Pacient) {
    return this.http.put(this.baseUrl + '/pacient/' + pacient.pacientId.toString(), pacient, { headers: this.header });
  }

  editMedicament(medicament: Medicament) {
    return this.http.put(this.baseUrl + '/medicament/' + medicament.medicamentId.toString(), medicament, { headers: this.header });
  }

  editTratament(tratament: Tratament) {
    return this.http.put(this.baseUrl + '/tratament/' + tratament.tratamentId.toString(), tratament, { headers: this.header });
  }

  editDiagnostic(diagnostic: Diagnostic) {
    return this.http.put(this.baseUrl + '/diagnostic/' + diagnostic.diagnosticId.toString(), diagnostic, { headers: this.header });
  }

  //delete methods

  deleteDoctor(id: number) {
    return this.http.delete(this.baseUrl + '/doctor/' + id.toString(), { headers: this.header });
  }

  deletePacient(id: number) {
    return this.http.delete(this.baseUrl + '/pacient/' + id.toString(), { headers: this.header });
  }

  deleteMedicament(id: number) {
    return this.http.delete(this.baseUrl + '/medicament/' + id.toString(), { headers: this.header });
  }

  deleteTratament(id: number) {
    return this.http.delete(this.baseUrl + '/tratament/' + id.toString(), { headers: this.header });
  }

  deleteDiagnostic(id: number) {
    return this.http.delete(this.baseUrl + '/diagnostic/' + id.toString(), { headers: this.header });
  }

}

