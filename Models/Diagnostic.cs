using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.Models
{
    public class Diagnostic
    {
        public int DiagnosticId { get; set; }

        public int PacientId { get; set; }

        public int DoctorId { get; set; }

        public virtual Pacient Pacient { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
