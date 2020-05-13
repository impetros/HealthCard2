import { Diagnostic } from './diagnostic.model';
import { Medicament } from './medicament.model';

export class Tratament {
   TratamentId: number;
   DiagnosticId: number;
   MedicamentId: number;
   Dozaj: number;
   DataAdministrare: string;
   DataTerminare: string;
   Diagnostic: Diagnostic;
   Medicament: Medicament;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
