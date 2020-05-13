using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.Models
{
    public class TratamentDTO
    {

        public int TratamentId { get; set; }

        public int DiagnosticId { get; set; }

        public int MedicamentId { get; set; }

        public float Dozaj { get; set; }

        public string DataAdministrare { get; set; }

        public string DataTerminare { get; set; }

    }
}
