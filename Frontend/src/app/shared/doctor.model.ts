export class Doctor {
  doctorId: number;
  doctorNume: string;
  doctorPrenume: string;
  varsta: string;
  specialitate: string;
  img: string;
  
  constructor(input?: any) {
    Object.assign(this, input);
  }
}
