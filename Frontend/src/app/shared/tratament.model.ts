import { Diagnostic } from './diagnostic.model';
import { Medicament } from './medicament.model';

export class Tratament {
   tratamentId: number;
   diagnosticId: number;
   medicamentId: number;
   dozaj: number;
   dataAdministrare: string;
   dataTerminare: string;
   diagnostic: Diagnostic;
   medicament: Medicament;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
