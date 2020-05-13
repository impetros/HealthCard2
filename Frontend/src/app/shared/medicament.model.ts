export class Medicament {
   medicamentId: number;
   nume: string;
   pret: number;
   cantitateDisponibila: number;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
