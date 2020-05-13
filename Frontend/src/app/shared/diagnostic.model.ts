import { Pacient } from './pacient.model';
import { Doctor } from './doctor.model';

export class Diagnostic {
   diagnosticId: number;
   pacientId: number;
   doctorId: number;
   pacient: Pacient;
   doctor: Doctor;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
