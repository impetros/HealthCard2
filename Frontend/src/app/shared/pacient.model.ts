export class Pacient {
  pacientId: number;
  pacientNume: string;
  pacientPrenume: string;
  varsta: string;
  cnp: string;
  img: string;
  
  constructor(input?: any) {
    Object.assign(this, input);
  }
}
